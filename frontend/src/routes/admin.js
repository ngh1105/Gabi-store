import AdminLayout from "layouts/admin";
import OverviewPage from "pages/admin/overview";
import CategoryPage from "pages/admin/category";

export const adminRoutes = {
    path: '/admin',
    element: <AdminLayout/>,
    children: [
        {
            path: '',
            element: <OverviewPage />,
        },
        {
            path: 'category',
            element: <CategoryPage />,
        },
    ]
};