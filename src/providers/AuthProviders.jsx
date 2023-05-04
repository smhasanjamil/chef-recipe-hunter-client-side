import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // User sign Up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Github Sign In
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Log out
    const logOut = () => {
        return signOut(auth);
    }



    // For currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('LoggedIn ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;