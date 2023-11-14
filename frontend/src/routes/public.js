import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
import Story from "pages/public/Story";
import StoryDetail from "pages/public/Home/Story/StoryDetail";
import Slider from "pages/public/Home/Slider";
import PostItem from "pages/public/Home/PostItem";
import Description from "pages/public/Home/Description";
import Catelog from "pages/public/Home/Catelog"
import BestSeller from "pages/public/Home/BestSeller";
import NewProducts from "pages/public/Home/NewProducts";
import Card from "pages/public/Home/NewProducts/Card";
import ForgetPassword from "pages/public/ForgetPassword";
import ProductPage, { Pants, Polo, Shirt } from "pages/public/Product"
import About from "pages/public/About";
import Contact from "pages/public/Contact";
import Following from "pages/public/Following";
import ConfirmOrder from "pages/public/ConfirmOrder"
import Policy from "pages/public/Policy";
import Rules from "pages/public/Rules";
import Information from "pages/public/Information";

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '/cart', element: <Cart /> },
        { path: '/blog', element: <Blog /> },
        { path: '/product', element: <ProductPage /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/following', element: <Following /> },
        { path: '/confirmorder', element: <ConfirmOrder /> },
        { path: '/policy', element: <Policy /> },
        { path: '/rules', element: <Rules /> },
        { path: '/info', element: <Information /> },
        
    ]
};