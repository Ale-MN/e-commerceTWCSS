import { NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4 bg-red-50 ";
  const contexto = useContext(ShoppingContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tienda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ropa"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronica"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/juguetes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/otros"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Otros
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/mis-ordenes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mis Ordenes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mi-cuenta"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mi Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li
          className={`${
            contexto.isOMiOrden
              ? "bg-amber-200 w-8 p-1 rounded-full scale-110 transition duration-150"
              : "none"
          } flex gap-0.5 items-center cursor-pointer`}
          onClick={() => contexto.openMiOrden()}
        >
          <LuShoppingCart className="w-4 h-4" />
          {contexto.count}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
