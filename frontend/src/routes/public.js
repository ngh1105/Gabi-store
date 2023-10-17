import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/home";

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        // {
        //     path: '/product',
        //     element: <ProductPage />,
        // },
    ]
};