"use client"
import React from "react";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";
const LogOutButton = () => {
    const router = useRouter();
    const handlerLogout = async () => {
        try{
            await logoutAction();
            // the redirect happens in the server action
            // this client-side redirection is a fallback
            router.push("/login");
            router.refresh();

        }catch(error){
            console.log("Logout Error:",error);
        }
    }
    return <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md cursor-pointer" onClick={handlerLogout}>Logout</button>
};

export default LogOutButton;