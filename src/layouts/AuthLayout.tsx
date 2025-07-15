import useTokenStore from "@/store/tokenstore";
import { Navigate, Outlet } from "react-router";


const AuthLayout = () => {
    const token = useTokenStore(state => state.token);

    if (token) {
        return <Navigate to={"/dashboard/home"} replace />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthLayout;