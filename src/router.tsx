import { createBrowserRouter } from "react-router";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import BookPage from "./pages/BookPage";
import AuthLayout from "./layouts/AuthLayout";
import CreateBook from "./pages/CreateBook";


const router = createBrowserRouter([
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "books",
                element: <BookPage />
            },
            {
                path: "books/create",
                element: <CreateBook />
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            }
        ],
    }
]);

export default router;