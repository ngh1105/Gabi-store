import { useAuth } from "hooks/use-auth";
import Sidebar from "./sidebar"
import Topbar from "./topbar"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function AdminLayout() {

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user || user.role !== "ADMIN") {
            navigate("/");
        }
    }, [user]);

    return (
        <>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                {/* Topbar */}
                <Topbar />
                {/* Sidebar */}
                <Sidebar />
                <main className="p-4 md:ml-64 h-auto pt-20">
                    <Outlet />
                </main>
            </div>

        </>
    )
}