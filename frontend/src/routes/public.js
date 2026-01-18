import PublicLayout from "layouts/public";
import HomePage from "pages/public/Home";
import ProductPage from "pages/public/Product";
import ProductDetailPage from "pages/public/product-detail";
import ContactPage from "pages/public/Contact";
import PolicyPage from "pages/public/Policy";
import AboutPage from "pages/public/About";
import CartPage from "pages/public/Cart";
import CheckoutPage from "pages/public/checkout";
import BillPage from "pages/public/bill";
import BillDetailPage from "pages/public/bill-detail"
import WishlistPage from "pages/public/wishlist";
import BlogPage from "pages/public/blog";
import BlogDetailPage from "pages/public/blog/blog-detail";
import TermsPage from "pages/public/terms";
import UserSettingsPage from "pages/public/user-settings";

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

        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },

        { path: '/wishlist', element: <WishlistPage /> },

        { path: '/bill', element: <BillPage /> },
        { path: '/bill-detail/:id', element: <BillDetailPage /> },

        { path: '/blog', element: <BlogPage /> },
        { path: '/blog-detail/:id', element: <BlogDetailPage /> },

        { path: '/terms', element: <TermsPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/policy', element: <PolicyPage /> },
        { path: '/about', element: <AboutPage /> },

        { path: '/user-settings', element: <UserSettingsPage /> },
    ]
};
