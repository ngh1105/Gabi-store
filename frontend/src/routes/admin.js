import { AdminLayout } from "layouts/admin";
import { HomeAdminPage } from "pages/admin/home";
import {ProductsPage} from "pages/admin/products"
import { FeelbackPage } from "pages/admin/feelback";
import { AccountPage } from "pages/admin/account";
export const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout/>,
    children: [
        {
            path: '/admin',
            element: <HomeAdminPage />,
        },
        {
            path: '/admin/products',
            element: <ProductsPage/>,
        },
        {
            path: "/admin/feelback",
            element: <FeelbackPage/>,
          },
          {
            path: "/admin/account",
            element: <AccountPage/>,
          }
    ]
};