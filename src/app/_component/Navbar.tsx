import Link from "next/link";
import New from "../contact/new/page";
import React from "react";
import LogOutButton from "./LogOutButton";

const NavBar = () => {
    const session = false;
    return (
        <nav className="bg-white shadow-sm"> 
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">Contact Manager</Link>
            </div>
            <div className="flex items-center space-x-4">
                {session ? (
                    <>
                    <Link href="/contact" className="hover:text-blue-800 mr-8">
                    contacts</Link>
                    <LogOutButton />
                    </>
                ) : (
                    <>
                    <Link href="/login" className="hover:text-blue-800 mr-5">LogIn</Link>
                    <Link href="/register" className="hover:text-blue-800">Register</Link> 
                    </>
                )}

            </div>
        </nav>
    )
};

export default NavBar;
//36:47