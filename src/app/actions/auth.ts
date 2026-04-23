"use server"
import { redirect, unstable_rethrow } from "next/navigation";
import axios from "axios";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";
const API_URL = "http://localhost:3001"

export const loginAction = async (formData: FormData) => {
    try{
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email,password);
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        
        const response = await axios.get(
            `${API_URL}/users?email=${email}&password=${password}`
        );
        const user : UserType = response.data[0];
        if (!user) throw new Error("Invalid Credentials");
        await setSession({name : user.name, email : user.email, id : user.id});
    } catch(error){
        unstable_rethrow(error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to login");
    }
    redirect("/contact");
};

export const logoutAction = async() => {
    await deleteSession();
    redirect("/login");
};