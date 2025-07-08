import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export const router = new createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    }
]);