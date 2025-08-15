import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import NavBar from "../../components/NavBar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/mi-cuenta", element: <MyAccount /> },
    { path: "/mi-orden", element: <MyOrder /> },
    { path: "/mis-ordenes", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export default App;
