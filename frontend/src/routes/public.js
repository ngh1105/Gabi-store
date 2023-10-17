import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/home";
import { BlogPage } from "pages/public/blog";
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
    ]
};