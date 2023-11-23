import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "images/logo.png";
import { useAuth } from "hooks/use-auth";
import { useEffect } from "react";

export default function AuthLayout() {

    const navigate = useNavigate();
    const { user } = useAuth();

    // If user is logged in, nagivate to public route
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                    Gabi Store
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}