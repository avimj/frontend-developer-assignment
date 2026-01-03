import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "shop",
        element: <ProductListing />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
