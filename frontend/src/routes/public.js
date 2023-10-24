import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
import Policy from "pages/public/Policy";
import Rules from "pages/public/Rules";
 
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
        { path: '/deliverInfo', element: <DeliverInfo/> },
        { path: '/policy', element: <Policy/> },
        { path: '/rules', element: <Rules/> },
    ]
};