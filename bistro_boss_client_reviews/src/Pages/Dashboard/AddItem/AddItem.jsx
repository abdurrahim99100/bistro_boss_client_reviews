import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_hosting_token;

const AddItem = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.img[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            // console.log('after posting a new menu item', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className="w-full">
            <SectionTitle subHeading={'Whats new?'} heading={'add an item'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-10 bg-[#F3F3F3] p-[50px] rounded">
                <div className="from-control w-full">
                    <label>
                        <span>Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Type recipe name" className="input input-bordered input-md w-full"
                        {...register("name", { required: true })} />
                    {errors.name && <span>This Name is required</span>}
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered w-full"
                            defaultValue="Select"
                            {...register("category", { required: true })}>
                            <option disabled>Select</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Drink</option>
                        </select>
                        {errors.category && <span>This Category is required</span>}
                    </div>
                    <div className="from-control w-full">
                        <label className="label">
                            <span>Price*</span>
                        </label>
                        <input type="number" name="price" placeholder="Type hear price" className="input input-bordered input-md w-full"
                            {...register("price", { required: true })} />
                        {errors.name && <span>This Name is required</span>}
                    </div>
                </div>
                <div className="from-control w-full">
                    <label>
                        <span>Recipe Details*</span>
                    </label>
                    <textarea name="recipe" className="textarea textarea-bordered w-full" placeholder="Bio"
                        {...register("recipe", { required: true })}></textarea>
                    {errors.recipe && <span>This Recipe is required</span>}
                </div>
                <div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                        {...register("img", { required: true })} />
                    {errors.img && <span>This Img is required</span>}
                </div>
                <input className="btn btn-sm my-5" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;