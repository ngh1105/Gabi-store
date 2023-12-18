import AdminLayout from "layouts/admin";
import OverviewPage from "pages/admin/overview";
import CategoryPage from "pages/admin/category";
import ProductPage from "pages/admin/product";
import UserPage from "pages/admin/user";
import BrandPage from "pages/admin/brand";
import BillPage from "pages/admin/bill";
import CommentPage from "pages/admin/comment";

export const adminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '',
            element: <OverviewPage />,
        },
        {
            path: 'category',
            element: <CategoryPage />,
        },
        {
            path: 'brand',
            element: <BrandPage />,
        },
        {
            path: 'product',
            element: < ProductPage />,
        },
        {
            path: 'user',
            element: < UserPage />,
        },
        {
            path: 'bill',
            element: < BillPage />,
        },
        {
            path: 'comment',
            element: < CommentPage />,
        },
    ]
};