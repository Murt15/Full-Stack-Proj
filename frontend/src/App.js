//importing dependencies for a multipage application
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importing all the pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Module from "./pages/Module";
import Search from "./pages/Search";
//defining the appropriate path to the specific component
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/module", element: <Module /> },
  { path: "/search", element: <Search /> },
]);
//the app function
function App() {
  return <RouterProvider router={router} />;
}
//exporting app function
export default App;
