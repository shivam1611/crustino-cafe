import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import CreateOrder from "./Pages/CreateOrder/CreateOrder";

const App = () => {

  const router  = createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'order/new',
      element:<CreateOrder/>
    },
   
  ])
  return (
    <RouterProvider router={router}/>
  );
};

export default App;