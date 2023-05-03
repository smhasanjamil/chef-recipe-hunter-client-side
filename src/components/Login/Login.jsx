import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Successfull Login', user);
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div className='mx-auto container'>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Fork and Knife Login</h1>
                        <p className="py-6">Log in to your Fork and Knife account to access premium dining and culinary services.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here..." className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Type here..." className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p href="#" className="label-text-alt">Don't have an account yet? <Link to="/register" className='link link-hover text-blue-700'>Sign Up.</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Sign In With Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;