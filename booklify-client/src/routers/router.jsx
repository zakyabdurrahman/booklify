import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])

export default router