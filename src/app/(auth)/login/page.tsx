import LogInForm from "@/app/_component/LogInForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="bg-white shadow-md max-w-md max-auto rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <LogInForm />
            <p className="mt-4 text-center">Dont have an account ? <Link href="/register" className="text-blue-600 hover:underline">Register</Link></p>
        </div>
    )
};

export default LoginPage;