import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../components/Home";
import Nav from "../components/Nav";

export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    
                    <Home />
                </>
            ),
            children:[{
                
            }],
            errorElement: <ErrorPage />,
        },
        
    ]);
    return <RouterProvider router={router} />;
}
