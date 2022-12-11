import "antd/dist/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Setup from "./pages/setup";
import Home from "./pages/home";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Setup />,
    errorElement: <ErrorPage />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorPage />
      }
    ]
  }
])
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
