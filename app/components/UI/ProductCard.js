import React, { memo } from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";
import Link from "next/link";

// UI Components
import IconButton from "../common/IconButton";

const ProductCard = ({ width, height }) => {
  return (
    // Product Card Container
    <Link href={"#"}>
      <div
        className="space-y-3 p-1.5 rounded-md overflow-hidden shadow"
        style={{ width: width, height: height, backgroundColor: "#F9F7F5" }}
      >
        <div className="flex items-center justify-between">
          <IconButton src={"/icons/heart.svg"} alt="like" />
          <span className="uppercase text-xs font-semibold py-1 px-2 rounded-md bg-white">
            Art de la table
          </span>
        </div>

        {/* Product Image */}
        <Image
          src={"/product-placeholder.png"}
          alt="product"
          width={width}
          height={height}
          loading="lazy"
          layout="responsive"
        />

        {/* Product Details */}
        <div className="flex justify-between font-serif text-xl md:text-2xl">
          <h5>Title</h5>
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
    </Link>
  );
};

ProductCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default memo(ProductCard);
