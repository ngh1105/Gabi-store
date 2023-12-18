import { setUser } from "redux/auth.slice";
import { useAuth } from "hooks/use-auth";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TokenGuard({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { logoutUser } = useAuth();

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        if (currUser) {
            dispatch(setUser(JSON.parse(currUser)));
        }
    }, []);

    useEffect(() => {
        const handleRefreshTokenFailed = async () => {

            await logoutUser();

            localStorage.removeItem("user");
            dispatch(setUser(null));

            toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");

            navigate('/auth/login');
        };

        window.addEventListener('refreshTokenFailed', handleRefreshTokenFailed);

        return () => {
            window.removeEventListener('refreshTokenFailed', handleRefreshTokenFailed);
        };
    }, []);

    return (
        <>
            {children}
        </>
    )
}