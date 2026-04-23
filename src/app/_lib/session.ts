// Set sesion Cookie

import { cookies } from "next/headers";
import { UserType } from "../_types/user";

export const setSession = async (user:UserType) => {
    (await cookies()).set("session", JSON.stringify(user),{
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        maxAge : 60 *60 * 24 * 7, // 7 days
        path : "/"
    });
};

// Get session Cookie

export const getSession = async () : Promise<UserType | null> => {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;
    
    const user = JSON.parse(session) as UserType;
    return user;
}

// Delete Session Cookie

export const deleteSession = async () => {
    const deleteSession = await cookies();
    deleteSession.delete("session");
};