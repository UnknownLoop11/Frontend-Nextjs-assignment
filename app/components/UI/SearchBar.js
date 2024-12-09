// "use client";

import React from "react";

// Next imports
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="lg:w-1/2 flex flex-row items-center h-10 rounded-md bg-gray-100 max-sm:hidden">
      <input
        name="search"
        type="text"
        placeholder="Rechercher un produit"
        className="w-full h-full p-2 text-sm rounded-md bg-inherit"
      />
      <Image
        src={"/icons/search.svg"}
        alt="search-icon"
        height={48}
        width={48}
        priority
      />
    </div>
  );
};

export default SearchBar;
