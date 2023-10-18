import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
 
export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '/cart', element: <Cart/> },
        { path: '/blog', element: <Blog/> },
    ]
};