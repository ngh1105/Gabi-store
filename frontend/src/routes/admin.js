import AdminLayout from "layouts/admin";
import OverviewPage from "pages/admin/overview";
import CategoryPage from "pages/admin/category";
import ProductPage from "pages/admin/product";
import UserPage from "pages/admin/user";

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
            path: 'product',
            element: < ProductPage />,
        },
        {
            path: 'user',
            element: < UserPage />,
        },
    ]
};