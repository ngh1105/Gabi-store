import AdminLayout from "layouts/admin";
import OverviewPage from "pages/admin/overview";
import CategoryPage from "pages/admin/category";
import ProductPage from "pages/admin/products";
import UserPage from "pages/admin/user";
import AddPage from "pages/admin/category/add";
import UpdatePage from "pages/admin/category/update";
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
        {
            path: 'product',
            element: < ProductPage/>,
        },
        {
            path: 'user',
            element: < UserPage/>,
        },
        //
        {
            path: 'category/addproduct',
            element: < AddPage/>,
        },
        {
            path: 'category/updateproduct',
            element: < UpdatePage/>,
        },
    ]
};