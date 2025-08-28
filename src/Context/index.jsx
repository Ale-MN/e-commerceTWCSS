import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  //contador de carrito
  const [count, setCount] = useState(0);

  //Abrir/Cerrar de pestaña detalles
  const [isOpen, setIsOpen] = useState(false);
  const openProductDetail = () => setIsOpen(true);
  const closeProductDetail = () => setIsOpen(false);

  //mostrar detalles de la card seleccionada
  const [mostrarDetalles, setMostrarDetalles] = useState({});

  //mostrar todos los productos del carrito
  const [todosLosProductos, setTodosLosProductos] = useState([]);

  //Abrir/Cerrar de pestaña Mi Orden
  const [isOMiOrden, setIsOMiOrden] = useState(false);
  const openMiOrden = () => setIsOMiOrden(true);
  const closeMiOrden = () => setIsOMiOrden(false);

  return (
    <ShoppingContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isOpen,
        mostrarDetalles,
        setMostrarDetalles,
        todosLosProductos,
        setTodosLosProductos,
        openMiOrden,
        closeMiOrden,
        isOMiOrden,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
