import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = total.toFixed(2)

    const handleDeleted = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                                showConfirmButton: false,
                            }
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-evenly my-10">
                <h3 className="text-2xl">Total Items : {cart.length}</h3>
                <h3 className="text-2xl">Total Price : ${totalPrice}</h3>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg">Index</th>
                            <th className="text-lg">Food</th>
                            <th className="text-lg">Items Name</th>
                            <th className="text-lg">Price</th>
                            <th className="text-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xl font-semibold">{item.name}</td>
                                    <td className="text-left text-xl font-semibold">${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDeleted(item)} className="bg-red-700 text-white btn btn-ghost text-xl"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;