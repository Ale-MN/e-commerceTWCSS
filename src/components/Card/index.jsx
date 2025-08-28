import { GoPlus } from "react-icons/go";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useContext, useState } from "react";
import { ShoppingContext } from "../../Context";
import { HiBadgeCheck } from "react-icons/hi";

const Card = (data) => {
  const contexto = useContext(ShoppingContext);

  const [plus, setPlus] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const mostrarProducto = (detalleProducto) => {
    contexto.openProductDetail();
    contexto.setMostrarDetalles(detalleProducto);
  };

  const agregarACarrito = (event, dataProduct) => {
    // cambia de iconos y deshabilita para posteriores clicks
    if (disabled) return;
    setPlus(false);
    setDisabled(true);

    event.stopPropagation();
    contexto.setCount(contexto.count + 1);
    contexto.closeProductDetail();
    contexto.openMiOrden();
    contexto.setTodosLosProductos([...contexto.todosLosProductos, dataProduct]);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => {
        mostrarProducto(data.data);
      }}
    >
      <figure className="relative mb-2 w-full h-4/5 ">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images}
          alt={data.data.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center m-2 bg-white w-6 h-6 rounded-full"
          style={{
            cursor: disabled ? "default" : "pointer",
          }}
          onClick={(event) => agregarACarrito(event, data.data)}
        >
          {plus ? (
            <HiOutlinePlusCircle className="w-6 h-6" />
          ) : (
            <HiBadgeCheck className="text-black bg-green-300 w-6 h-6 rounded-full" />
          )}
        </div>
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light ">{data.data.title}</span>
        <span className="text-lg font-medium ">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
