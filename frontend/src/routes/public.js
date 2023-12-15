import PublicLayout from "layouts/public";
import HomePage from "pages/public/home";
import ProductPage from "pages/public/product";
import ContactPage from "pages/public/contact";
import AboutPage from "pages/public/about";
import CartPage from "pages/public/cart";
import CheckoutPage from "pages/public/checkout";
import BillPage from "pages/public/bill";
import BillDetailPage from "pages/public/bill-detail"

import Blog from "pages/public/Blog";
import BlogDetail from "pages/public/Blog/BlogDetail";
import Story from "pages/public/story";
import StoryDetail from "pages/public/home/Story/StoryDetail";
import PostItem from "pages/public/home/PostItem";
import Catelog from "pages/public/home/Catelog"

import Following from "pages/public/Following";

import Policy from "pages/public/Policy";
import Rules from "pages/public/Rules";
import Information from "pages/public/Information";
import ProductDetailPage from "pages/public/product-detail";

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '/product', element: <ProductPage /> },
        { path: '/product-detail/:id', element: <ProductDetailPage /> },

        { path: '/contact', element: <ContactPage /> },
        { path: '/about', element: <AboutPage /> },

        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },

        { path: '/bill', element: <BillPage /> },
        { path: '/bill-detail/:id', element: <BillDetailPage /> },

        { path: '/rules', element: <Rules /> },
        { path: '/information', element: <Information /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/:id', element: <BlogDetail /> },

        { path: '/story', element: <Story /> },
        { path: '/postitem', element: <PostItem /> },
        { path: '/catelog', element: <Catelog /> },

        { path: '/following', element: <Following /> },
        { path: '/policy', element: <Policy /> },
        { path: '/storydetail', element: <StoryDetail /> },
    ]
};