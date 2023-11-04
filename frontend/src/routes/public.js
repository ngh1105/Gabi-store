import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
import BlogDetail from "pages/public/Blog/BlogDetail";
 
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
        { path: '/blog/:id', element: <BlogDetail/> },
        { path: '/deliverInfo', element: <DeliverInfo/> }
     
    ]
};