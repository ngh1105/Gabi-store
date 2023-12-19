import { useAuth } from "hooks/use-auth";
import { Avatar, Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "app/config";

export default function Profile() {

    const nagivate = useNavigate();

    const { user, logoutUser } = useAuth();

    const handleLogout = async () => {

        await logoutUser();
        nagivate("/auth/login");
    }

    return (
        <div
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
            <Dropdown
                label={<Avatar alt="User settings" size="sm" img={`${API_URL}${user && user.avatarUrl && user.avatarUrl !== "" ? user.avatarUrl : "/upload/user/default-avatar.png"}`} rounded />}
                arrowIcon={false}
                inline
            >
                <Dropdown.Header>
                    <span className="block text-sm">{user?.fullName}</span>
                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                </Dropdown.Header>
                {
                    (user && user.role == "ADMIN") ? (
                        <>
                            <Dropdown.Item>
                                <Link to="/admin" >Trang quản trị</Link>
                            </Dropdown.Item>
                        </>
                    )
                        : null
                }
                <Dropdown.Item><Link to="/user-settings" >Hồ sơ của tôi</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/bill" >Đơn hàng</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleLogout()}>Đăng xuất</Dropdown.Item>
            </Dropdown>
        </div>
    )
}