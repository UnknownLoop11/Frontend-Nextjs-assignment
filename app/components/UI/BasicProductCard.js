import React, { memo } from "react";
import PropTypes, { number, string } from "prop-types";

// Next imports
import Image from "next/image";

const BasicProductCard = ({ name, imgSrc, pricing }) => {
  return (
    <div className="space-y">
      <Image
        src={imgSrc}
        alt="product"
        width={128}
        height={128}
        loading="lazy"
        className="border rounded-md"
      />
      <span
        className="font-extralight text-xs text-gray-400"
        style={{ fontSize: "0.6rem" }}
      >
        ART DE LA TABLE
      </span>
      <p className="text-sm">{name}</p>
      <p className="font-extralight text-base">
        <span className="font-semibold">{pricing}€</span> / 20 piėces
      </p>
    </div>
  );
};

BasicProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([number, string]).isRequired,
};

export default memo(BasicProductCard);
