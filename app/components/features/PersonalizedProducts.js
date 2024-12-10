"use client";

import React, { useRef, useCallback } from "react";

// Next imports
import Link from "next/link";

// UI Components
import IconButton from "../common/IconButton";

// Constants
import { personalizedProducts } from "@/app/utils/constants";

const PersonalizedProducts = () => {
  const scrollRef = useRef(null);

  const scrollRight = useCallback(() => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + 800,
      behavior: "smooth",
    });
  }, []);

  const scrollLeft = useCallback(() => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft - 800,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="md:relative w-full px-2 md:px-8 space-y-3 mt-8">
      {/* Title */}
      <div className="flex justify-between items-baseline">
        <h2 className="max-sm:w-3/5 text-xl md:text-2xl font-semibold">
          Ces produits pourraient vous intéresser
        </h2>
        <Link href={"#"} className="uppercase underline text-xs md:text-sm">
          Voir toute la collection
        </Link>
      </div>

      {/* Products Horizontal List View */}
      <div
        ref={scrollRef}
        className=" flex flex-row gap-x-4 overflow-x-auto bg-opacity-60 bg-gray-50 shadow-inner p-1.5"
      >
        {personalizedProducts}
      </div>
      {/* Scroll Buttons */}

      <IconButton
        src={"/icons/arrow-right.svg"}
        alt="scroll-left"
        className="max-sm:hidden absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 bg-secondary"
        size={32}
        onClick={scrollLeft}
      />
      <IconButton
        src={"/icons/arrow-right.svg"}
        alt="scroll-right"
        className="max-sm:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary"
        size={32}
        onClick={scrollRight}
      />
    </div>
  );
};

export default PersonalizedProducts;
