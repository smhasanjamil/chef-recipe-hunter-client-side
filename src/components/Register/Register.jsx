import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSignUp = (event) => {
        event.preventDefault();
        // console.log(event.target.name.value);

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const password = event.target.password.value;

        console.log(name, email, photoURL, password);
    }
    return (
        <div className='mx-auto container'>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up to create an account.</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type here..." className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here..." className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Type here..." className="input input-bordered" />
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
                                    <p href="#" className="label-text-alt">Have an account? <Link to="/login" className='link link-hover text-blue-700'>Sign in.</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;