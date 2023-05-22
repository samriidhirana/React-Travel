import "./App.css";
import Home from "./pages/Home";
import About from './pages/About';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about-us', element: <About />},
  {path: '/destinations', element: <Destinations />},
  {path: '/activities', element: <Activities />}
])


function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
