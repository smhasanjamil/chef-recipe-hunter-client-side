import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);

    // console.log(createUser)

    const handleSignUp = (event) => {
        event.preventDefault();
        // console.log(event.target.name.value);

        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photoURL.value;
        const password = event.target.password.value;

        // console.log(name, email, photoURL, password);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                form.reset();
                updateUserData(user, name, photo)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

        // Update user Data
        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            }).then(() => {
                console.log('Username updated!')
                // ...
            }).catch((error) => {
                console.log(error)
                // ...
            });
        }
    }
    return (
        <div className='mx-auto container'>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Fork and Knife Register</h1>
                        <p className='py-6'>Register for a Fork and Knife account to access premium dining and culinary services.</p>
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