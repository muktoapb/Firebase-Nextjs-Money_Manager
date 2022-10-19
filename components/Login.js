
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from "../assets/img/logo.svg";
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
            <Image src={Logo} alt="Money Manager"></Image>
            <h3>login</h3>
            <button onClick={GoogleLogin}>Login with google</button>
        </div>
    )
}
