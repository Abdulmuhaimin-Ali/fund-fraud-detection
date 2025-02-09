import Image from "next/image";
import { useCart } from "../cartContext";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

export default function CartItem({
  id,
  name,
  image,
  description,
  price,
}: CartItemProps) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 rounded-lg border border-gray-200 shadow-sm mb-4 transition hover:shadow-md">
      <Image
        src={image || "/placeholder.svg?height=50&width=50"}
        alt={name}
        width={50}
        height={50}
        className="grayscale object-cover rounded-md"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h3 className="font-medium text-lg text-gray-800">{name}</h3>
          {description && (
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-bold text-gray-900">${price.toFixed(2)}</p>
          <button
            className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}