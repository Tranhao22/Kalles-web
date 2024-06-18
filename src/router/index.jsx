import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
	{
		path: "/wishlist",
		element: <Wishlist />,
	},
]);
