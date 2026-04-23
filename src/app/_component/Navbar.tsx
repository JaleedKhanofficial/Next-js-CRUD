import Link from "next/link";
import React from "react";
import LogOutButton from "./LogOutButton";
import { getSession } from "../_lib/session";

const NavBar = async () => {
    const session = await getSession();
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">Contact Manager</Link>
                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/contact" className="hover:text-blue-600 mr-8">
                                contacts</Link>
                            <LogOutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="hover:text-blue-600 mr-5">LogIn</Link>
                            <Link href="/register" className="hover:text-blue-600">Register</Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
};

export default NavBar;
//1.01:29 