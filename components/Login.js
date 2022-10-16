import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utils/firebase";
export default function Login() {
    //signin with google
    const googleProvider = new GoogleAuthProvider();
    const route = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const GoogleLogin = async()=>{
        try {
            const result = await signInWithPopup(auth,googleProvider)
            route.push('/');
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    //getting user details
    useEffect(()=>{
        if (user) {
            route.push('/')
        }
    },[user])

    return (
        <div className="login_area">
            <h3>login</h3>
            <button onClick={GoogleLogin}>Google</button>
        </div>
    )
}
