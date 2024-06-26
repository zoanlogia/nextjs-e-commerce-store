"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import type { Product } from "@/types";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { MouseEventHandler } from "react";
import Currency from "../ui/currency";
import IconButton from "../ui/icon-button";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const cart = useCart();

  const handleClick = () => {
    router.push(`/products/${data.id}`);
  };

  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-xl border p-3 space-y-4 dark:bg-slate-800"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand size={20} className="text-gray-600 dark:text-white" />
              }
            />
            <IconButton
              onClick={addToCart}
              icon={
                <ShoppingBag
                  size={20}
                  className="text-gray-600 dark:text-white"
                />
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};
export default ProductCard;
