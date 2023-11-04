import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
<<<<<<< Updated upstream
=======
import Story from "pages/public/home/Story";
import Slider from "pages/public/home/Slider";
import PostItem from "pages/public/home/PostItem";
import Description from "pages/public/home/Description";
import Catelog from "pages/public/home/Catelog"
import BestSeller from "pages/public/home/BestSeller";
import NewProducts from "pages/public/home/NewProducts";
import Card from "pages/public/home/NewProducts/Card";
import ForgetPassword from "pages/public/ForgetPassword";
import Product from "pages/public/Product"
import BlogDetail from "pages/public/Blog/BlogDetail";
>>>>>>> Stashed changes
 
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
    ]
};