import { HiOutlineTrash } from "react-icons/hi";

const OrderCard = (props) => {
  const { title, imageUrl, price, id, handleDelete } = props;
  return (
    <div className="flex justify-between items-center p-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-0.5">
        <p className="text-lg font-bold">${price}</p>
        <HiOutlineTrash
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default OrderCard;
