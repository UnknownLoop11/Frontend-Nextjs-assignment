import React, { memo } from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";
import Link from "next/link";

// UI Components
import IconButton from "../common/IconButton";
import Counter from "./Counter";
import Button from "../common/Button";

const ProductCard = ({ width, height }) => {
  return (
    // Product Card Container
    <Link href={"#"}>
      <div
        className="space-y-3 p-1.5 rounded-md overflow-hidden shadow group"
        style={{ width: width, height: height, backgroundColor: "#F9F7F5" }}
      >
        <div className="flex items-center justify-between">
          <IconButton src={"/icons/heart.svg"} alt="like" />
          <p className="uppercase text-xs font-semibold space-x-1.5">
            <span className="py-1 px-2 rounded-md bg-white shadow-sm">
              Art de la table
            </span>
            <span className="py-1 px-2 rounded-md bg-white shadow-sm hidden group-hover:inline">
              lot
            </span>
          </p>
        </div>

        {/* Product Image */}
        <div className="md:relative">
          <Image
            src={"/product-placeholder.png"}
            alt="product"
            width={width}
            height={height}
            objectFit="contain"
            loading="lazy"
            className="group-hover:scale-105 transition-all duration-300"
          />
          <div className="hidden absolute bottom-0 w-full group-hover:flex items-center flex-row justify-around p-1 rounded-md bg-white">
            <span className="font-semibold">QTĖ</span>
            <Counter />
            <Button bgColor="#d534eb" title={"Ajouter"} />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-serif text-xl md:text-2xl">
            <p>Title</p>
            <span>
              0<sup>€</sup>
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="font-extralight">
              0,35€/Pièce · <span className="text-xs">RÉF : VABGN5</span>
            </p>
            <span className="text-nowrap text-xs py-1 px-2 bg-gray-200 rounded-full font-semibold">
              20 pieces
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default memo(ProductCard);
