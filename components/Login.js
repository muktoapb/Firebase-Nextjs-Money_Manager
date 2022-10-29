
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoLogoGoogle } from "react-icons/io5";
import Logo from "../assets/img/logo.png";
import { auth } from "../utils/firebase";

export default function Login() {
    //signin with google
    const googleProvider = new GoogleAuthProvider();
    const route = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            route.push('/');
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    //getting user details
    useEffect(() => {
        if (user) {
            route.push('/')
        }
    }, [user])

    return (
        <>
            <Head>
                <title>Login - Money Manager</title>
            </Head>
            <div className="flex items-center flex-col justify-center h-screen">
                <div className="shadow-lg max-w-sm px-6 py-6 rounded-md">
                        <div className="max-w-[150px] mb-8 mx-auto">
                        <Image className="text-center" src={Logo} alt="Money Manager"></Image>
                        </div>

                    <button className="text-center flex items-center justify-center bg-red-500 text-white px-3 py-1 w-full rounded-full hover:bg-red-600" onClick={GoogleLogin}> <IoLogoGoogle className="mr-2" />  Continue with Google</button>
                </div>
                <p className="mt-8 text-slate-500">Design & Develop by <a href="https://mukto.info" target="_blank" rel="noopener noreferrer"><b className="underline">Mahidul Islam Mukto</b></a></p>
                <p className="text-slate-500">Build with <b>Next.js</b> & <b>Firebase</b></p>
            </div>
        </>
    )
}
