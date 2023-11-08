import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { adminRoutes } from "./admin";
import { NotFound } from "pages/public/not-found";

// We have to create own not found component
const errorRoutes = {
    path: '*',
    element: <NotFound />,
};

export const AppRoutes = () => {
    return useRoutes([publicRoutes, adminRoutes, errorRoutes]);
}