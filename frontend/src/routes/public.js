import { PublicLayout } from "layouts/public";
import { HomePage } from "pages/public/Home";

import Cart from "pages/public/Cart";
import Blog from "pages/public/Blog";
import DeliverInfo from "pages/public/DeliverInfo";
import Story from "pages/public/Story";
import Slider from "pages/public/Home/Slider";
import PostItem from "pages/public/Home/PostItem";
import Description from "pages/public/Home/Description";
import Catelog from "pages/public/Home/Catelog"
import BestSeller from "pages/public/Home/BestSeller";
import NewProducts from "pages/public/Home/NewProducts";
import Card from "pages/public/Home/NewProducts/Card";
import ForgetPassword from "pages/public/ForgetPassword";
import Product, { Pants, Polo, Shirt } from "pages/public/Product"
import PoloDetail from "pages/public/Product/Polo/PoloDetail";
import ShirtDetail from "pages/public/Product/Shirt/ShirtDetail";
import PantsDetail from "pages/public/Product/Pants/PantsDetail";
import About from "pages/public/About";
import Contact from "pages/public/Contact";
import Following from "pages/public/Following";
import BillDetail from "pages/public/BillDetail"
import Policy from "pages/public/Policy";

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

        { path: '/deliverInfo', element: <DeliverInfo /> },
        { path: '/story', element: <Story /> },
        { path: '/slider', element: <Slider /> },
        { path: '/postitem', element: <PostItem /> },
        { path: '/description', element: <Description /> },
        { path: '/catelog', element: <Catelog /> },
        { path: '/bestSeller', element: <BestSeller /> },
        { path: '/newproducts', element: <NewProducts /> },
        { path: '/card', element: <Card /> },
        { path: '/forgetPassword', element: <ForgetPassword /> },
        { path: '/product', element: <Product /> },
        { path: '/product/polo', element: <Polo /> },
        { path: '/product/polo/:id', element: <PoloDetail /> },
        { path: '/product/shirt', element: <Shirt /> },
        { path: '/product/shirt/:id', element: <ShirtDetail /> },
        { path: '/product/pants', element: <Pants /> },
        { path: '/product/pants/:id', element: <PantsDetail /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/following', element: <Following /> },
        { path: '/BillDetail', element: <BillDetail /> },
        { path: '/policy', element: <Policy /> },
    ]
};