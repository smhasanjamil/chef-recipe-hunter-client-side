import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [wrongpassword, setWrongPassword] = useState("");

    const { user, createUser } = useContext(AuthContext);


    const navigate = useNavigate();
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

        // Password validation
        // if (password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        //     const errorMessage = "Password must be a minimum of eight characters and contain at least one letter and one number.";
        //     setWrongPassword(errorMessage);
        //     return;
        // }



        if (!password) {
            const errorMessage = "Please enter a password.";
            setWrongPassword(errorMessage);
            return;
          }
          
          if (password.length < 8) {
            const errorMessage = "Password must be at least 8 characters long.";
            setWrongPassword(errorMessage);
            return;
          }
          
          if (!/(?=.*[A-Za-z])/.test(password)) {
            const errorMessage = "Password must contain at least one letter.";
            setWrongPassword(errorMessage);
            return;
          }
          
          if (!/(?=.*\d)/.test(password)) {
            const errorMessage = "Password must contain at least one number.";
            setWrongPassword(errorMessage);
            return;
          }
          
          // Password meets all requirements
          setWrongPassword(null);
          




        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                
                form.reset();
                updateUserData(user, name, photo)

                navigate("/");
                toast("Successfully Register");
            })
            .catch((error) => {
                const errorMessage = error.message.replace("Firebase: ", "");
                // console.log(errorMessage)
                setWrongPassword(errorMessage);
                // form.reset();

            });

        // Update user Data
        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            }).then(() => {
                form.reset();
                // console.log('Username updated!')
                // ...
            }).catch((error) => {
                // console.log(error)
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
                                <input type="text" name='name' placeholder="Type here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Type here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Type here..." className="input input-bordered" required />
                                <label className="label">
                                    <p href="#" className="label-text-alt">Have an account? <Link to="/login" className='link link-hover text-blue-700'>Sign in.</Link></p>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt text-red-700">{wrongpassword}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Register;