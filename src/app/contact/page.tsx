import ContactList from "../_component/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const ContactPage = async () => {
    const user = await getSession();
    if(!user){
        return (
            <div>
                <h5>Please <a href="/login" className="text-blue-800 hover:underline cursor-pointer">Login</a> for to view contact.</h5>
            </div>
        );
    }

    const contacts = await getContacts(user?.id)
    if(!contacts || contacts.length === 0){
        return (
            <div>
                Please <a href="/contact/new" className="text-blue-800 hover:underline cursor-pointer"> Add new Contact </a> to you contact list
            </div>
        )
    }
    return <div>
        <div className="flex justify-between items-center mb-6">
            <h1>Your Contacts</h1>
            <a href="/contact/new" className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md">Add Contact</a>
        </div>
        <ContactList contacts={contacts}/>
    </div>

};
export default ContactPage;