import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Module from "./pages/Module";
import Search from "./pages/Search";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/module", element: <Module /> },
  { path: "/search", element: <Search /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
