import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ShoppingContext } from "../../Context";

const ProductDetail = () => {
  const contexto = useContext(ShoppingContext);

  return (
    <>
      <aside
        className={`${
          contexto.isOpen ? "flex" : "hidden"
        } w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border  border-black rounded-xl bg-white`}
      >
        <div className="flex justify-between items-center p-3">
          <h2 className="font-medium text-xl">Detalles</h2>
          <IoCloseOutline
            className="w-6 h-6 cursor-pointer"
            onClick={() => contexto.closeProductDetail()}
          />
        </div>
        <hr className="w-full  mb-3" />
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={contexto.mostrarDetalles.images}
            alt={contexto.mostrarDetalles.title}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            ${contexto.mostrarDetalles.price}
          </span>
          <span className="text-xl mb-2">{contexto.mostrarDetalles.title}</span>
          <span className="font-light text-sm ">
            {contexto.mostrarDetalles.description}
          </span>
        </p>
      </aside>
    </>
  );
};

export default ProductDetail;
