import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { adminRoutes } from "./admin";
import { NotFound } from "pages/public/not-found";
import { authRoutes } from "./auth";

// We have to create own not found component
const errorRoutes = {
    path: '*',
    element: <NotFound />,
};

export const AppRoutes = () => {
    return useRoutes([publicRoutes, authRoutes, adminRoutes, errorRoutes]);
}