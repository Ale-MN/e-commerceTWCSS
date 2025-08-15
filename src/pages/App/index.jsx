import { useRoutes } from "react-router-dom";

import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <div className="bg-red-100">
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <SignIn />
        <NotFound />
      </div>
    </>
  );
}

export default App;
