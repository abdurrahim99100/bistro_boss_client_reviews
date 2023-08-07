import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'photoURL updated successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/");
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row w-10/12">
                    <div className="text-center lg:text-left w-5/12">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='w-5/12'>
                        <h3 className="text-center my-5 text-4xl font-semibold max-w-sm">Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" {...register("name", { required: true, minLength: 4, maxLength: 10 },)} placeholder="Name" className="input input-bordered" />
                                    {/* error handle */}
                                    {errors.name?.type === 'required' && <p className="text-yellow-600">Name is required</p>}
                                    {errors.name?.type === "minLength" && <p className="text-yellow-600">Name must be 5 characters</p>}
                                    {errors.name?.type === "maxLength" && <p className="text-yellow-600">Name must be under 11 characters</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photoUrl"
                                        {...register("photoUrl", { required: true, minLength: 4, maxLength: 10 },)} placeholder="Photo URL" className="input input-bordered" />
                                    {/* error handle */}
                                    {errors.photoUrl?.type === 'required' && <p className="text-yellow-600">Photo URL is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        {...register("email", { required: true })}
                                        placeholder="Email" className="input input-bordered" />
                                    {errors.email?.type === 'required' && <p className="text-yellow-600">Email is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        {...register("password", { required: true })} placeholder="Password"
                                        className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-yellow-600">Password is required</p>}
                                </div>
                                <div className="form-control">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <div className="text-[#D1A054]">
                                    <span>Already register? </span><Link to='/login' className="font-semibold">Go to login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;