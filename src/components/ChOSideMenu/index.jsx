import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ShoppingContext } from "../../Context";
import OrderCard from "../OrderCard";

const ChoSideMenu = () => {
  const contexto = useContext(ShoppingContext);

  const handleDelete = (id) => {
    const filtrarProductos = contexto.todosLosProductos.filter(
      (product) => product.id != id
    );
    contexto.setTodosLosProductos(filtrarProductos);
  };

  return (
    <>
      <aside
        className={`${
          contexto.isOMiOrden ? "flex" : "hidden"
        } w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border  border-black rounded-xl bg-white`}
      >
        <div className="flex justify-between items-center p-3">
          <h2 className="font-medium text-xl">Mi Orden</h2>
          <IoCloseOutline
            className="w-6 h-6 cursor-pointer"
            onClick={() => contexto.closeMiOrden()}
          />
        </div>
        <hr className="w-full  mb-3" />
        <div className="p-2 overflow-y-scroll">
          {contexto.todosLosProductos.map((product) => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
              id={product.id}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ChoSideMenu;
