import AuthLayout from "layouts/auth";
import LoginPage from "pages/auth/login";
import RegisterPage from "pages/auth/register";
import ForgotPasswordPage from "pages/auth/forgot-password";

export const authRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: 'register',
            element: <RegisterPage />,
        },
        {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
        },
    ]
};