import "./App.css";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Activities from "./pages/Activities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import SingleDestination from "./pages/SingleDestination";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/destinations", element: <Destinations /> },
  { path: "/activities", element: <Activities /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/destinations/:title", element: <SingleDestination /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
