"use client";
import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

type DeleteButtonPropos = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact? : ContactType;
};

const DeleteButton = ({action, contact} : DeleteButtonPropos) => {
    const [state, formAction] = useActionState(action, null);
    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={contact?.id} />
            
            <button type="submit" className="flex items-center text-red-600 gap-2 px-3 py-1 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100" 
            onClick={(e) => {
                if (!confirm("Are you sure you want to delete this contact ?")){
                    e.preventDefault();
                }
            }}
            ><FiTrash2 /> Delete</button>
        </form>
    )
};

export default DeleteButton;