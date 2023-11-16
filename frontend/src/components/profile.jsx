import { useAuth } from "auth/use-auth";
import { Avatar, Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {

    const nagivate = useNavigate();

    const { user, logoutUser } = useAuth();

    const handleLogout = async () => {

        await logoutUser();
        nagivate("/");
    }

    return (
        <div
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
            <Dropdown
                label={<Avatar alt="User settings" size="sm" img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" rounded />}
                arrowIcon={false}
                inline
            >
                <Dropdown.Header>
                    <span className="block text-sm">Huy Ngoc</span>
                    <span className="block truncate text-sm font-medium">huy@gmail.com</span>
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
                <Dropdown.Item>Hồ sơ của tôi</Dropdown.Item>
                <Dropdown.Item>Cài đặt</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleLogout()}>Đăng xuất</Dropdown.Item>
            </Dropdown>
        </div>
    )
}