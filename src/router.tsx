import { createBrowserRouter } from "react-router";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import BookPage from "./pages/BookPage";


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
        ],
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
]);

export default router;