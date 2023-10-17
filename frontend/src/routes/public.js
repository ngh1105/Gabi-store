import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/home";
import { Blog } from "pages/public/Blog";


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
            element: <Blog />,
        },
     
    ]
};