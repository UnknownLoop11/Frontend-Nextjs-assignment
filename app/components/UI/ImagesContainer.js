"use client";

import React, { useState, memo } from "react";

// Next imports
import Image from "next/image";

const ImagesContainer = ({ imgList }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative border-2 border-gray-200 rounded-md max-sm:-z-10">
      {/* Images List */}
      <div className="absolute left-2 top-2 space-y-1.5" style={{ zIndex: 1 }}>
        {imgList.map((img, idx) => (
          <div key={idx}>
            <Image
              loading="lazy"
              src={img}
              alt="product image"
              width={48}
              height={48}
              className={`rounded-md cursor-pointer max-sm:w-8 ${
                currentImage === idx ? "border-2 border-primary" : "opacity-50"
              }`}
              onClick={() => setCurrentImage(idx)}
            />
          </div>
        ))}
      </div>

      {/* Current Image */}
      <Image
        src={imgList[currentImage]}
        alt="product image"
        width={680}
        height={600}
        className="rounded-md"
        priority
      />
    </div>
  );
};

export default memo(ImagesContainer);
