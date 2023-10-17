import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";

// We have to create own not found component
const notFound = {
    path: '*',
    element: <>Not Found Page</>,
};

export const AppRoutes = () => {
    return useRoutes([publicRoutes, notFound]);
}