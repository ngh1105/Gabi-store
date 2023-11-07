import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
import Story from "pages/public/Home/Story";
import Slider from "pages/public/Home/Slider";
import PostItem from "pages/public/Home/PostItem";
import Description from "pages/public/Home/Description";
import Catelog from "pages/public/Home/Catelog"
import BestSeller from "pages/public/Home/BestSeller";
import NewProducts from "pages/public/Home/NewProducts";
import Card from "pages/public/Home/NewProducts/Card";
import ForgetPassword from "pages/public/ForgetPassword";
import Product from "pages/public/Product"
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
        { path: '/deliverInfo', element: <DeliverInfo/> },
        { path: '/story', element: <Story/> },
        { path: '/slider', element: <Slider/> },
        { path: '/postitem', element: <PostItem/> },
        { path: '/description', element: <Description/> },
        { path: '/catelog', element: <Catelog/> },
        { path: '/bestSeller', element: <BestSeller/> },
        { path: '/newproducts', element: <NewProducts/> },
        { path: '/card', element: <Card/> },
        { path: '/forgetPassword', element: <ForgetPassword/> },
        { path: '/product', element: <Product/> },
    ]
};