import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import authentication from "../../middlewares/authentication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        loader: authentication
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    }
])

export default router