import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/home";
import { BlogPage } from "pages/public/Blog";
import { BlogDetail } from "pages/public/Blog/blogDetail";
import Cart from "pages/public/Cart";
export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/blog',
            element: <BlogPage />,
        },
        {
            path: '/blogDetail',
            element: <BlogDetail />,
        },

        {
            path: '/cart',
            element: <Cart />,
        },
    ]
};