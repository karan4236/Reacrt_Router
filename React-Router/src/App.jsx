import {
  createBrowserRouter
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter (
  [
    {
      path: "/",
      element: <home />
    },

    {
      path: "/",
      element: <about />
    },

    {
      path: "/",
      element: <Dashboard />
    }
  ]
)

function App() {
return(
<div>
  <RouterProvider router = {router} />
</div>
); 
}

export default App
