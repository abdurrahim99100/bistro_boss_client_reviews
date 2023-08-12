import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(2);
    }, [])

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value, false) == true) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Login Success Fully!',
                    '!!'
                );
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row w-10/12">
                    <div className="text-center lg:text-left w-5/12">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='w-5/12'>
                        <h3 className="text-center my-5 text-4xl font-semibold max-w-sm">Login</h3>
                        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                        <input
                                            ref={captchaRef}
                                            type="text"
                                            name='captcha'
                                            placeholder='type captcha hear'
                                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                            aria-label="Search"
                                            aria-describedby="button-addon3" />
                                        <button
                                            onClick={handleCaptcha}
                                            className="relative z-[2] rounded-r bg-primary text-white px-6 py-2 text-xs font-medium uppercase transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                            type="button"
                                            id="button-addon3"
                                            data-te-ripple-init>
                                            Go
                                        </button>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <div className='text-[#D1A054]'>
                                    <span>New hear? </span><Link className='font-semibold' to='/signup'>Create a new account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;