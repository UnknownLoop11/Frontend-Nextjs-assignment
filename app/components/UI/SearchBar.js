// "use client";

import React from "react";

// UI Components
import IconButton from "../common/IconButton";
import Icon from "../common/Icon";
import BasicProductCard from "./BasicProductCard";

// Constants
import { searchSuggestions } from "@/app/utils/constants";

const SearchBar = () => {
  return (
    <div className="focus:relative lg:w-1/2 flex flex-row items-center h-12 rounded-md bg-gray-100 focus-within:border border-primary max-sm:hidden group">
      <input
        name="search"
        type="text"
        placeholder="Rechercher un produit"
        className="w-full h-full text-sm p-2 rounded-l-md bg-inherit ring-primary"
        autoComplete="off"
      />
      <IconButton
        src={"/icons/search2.svg"}
        alt={"search"}
        size={48}
        className={"hover:border bg-primary rounded-r-md p-0 w-fit h-fit"}
      />

      {/* Search Results */}
      <div className="hidden absolute top-20 group-focus-within:flex p-3 gap-x-3 items-stretch border shadow-md rounded-md  bg-white">
        <div className="space-y-2 w-80">
          <p className="font-extralight text-sm text-gray-400">Suggestions</p>
          {/* Search Query */}
          <ul className="list-none space-y-3">
            <li className="flex gap-x-2 items-center">
              <Icon src={"/icons/restart.svg"} alt={"restart"} />
              <span>
                fourch<b>ettes</b>
              </span>
              <Icon
                src={"/icons/arrow-up-left.svg"}
                alt={"arrow-up-left"}
                className={"ml-auto"}
              />
            </li>
            <li className="flex gap-x-2 items-center">
              <Icon src={"/icons/search.svg"} alt={"search"} />
              <span>
                four<b>chette grande</b>
              </span>
              <Icon
                src={"/icons/arrow-up-left.svg"}
                alt={"arrow-up-left"}
                className={"ml-auto"}
              />
            </li>
            <li className="flex gap-x-2 items-center">
              <Icon src={"/icons/search.svg"} alt={"search"} />
              <span>
                fourc<b>hette Piranha</b>
              </span>
              <Icon
                src={"/icons/arrow-up-left.svg"}
                alt={"arrow-up-left"}
                className={"ml-auto"}
              />
            </li>
            <li className="flex gap-x-2 items-center">
              <Icon src={"/icons/search.svg"} alt={"search"} />
              <span>
                fou<b>rchette</b>
              </span>
              <Icon
                src={"/icons/arrow-up-left.svg"}
                alt={"arrow-up-left"}
                className={"ml-auto"}
              />
            </li>
          </ul>

          <div className="flex items-center gap-x-2">
            <Icon src={"/icons/box-menu.svg"} alt={"box-menu"} />
            <div>
              <p>Fourchettes</p>
              <p
                className="text-xs text-gray-400"
                style={{ fontSize: "0.65rem" }}
              >
                ART DE LA TABLE &gt; FOURCHETTES
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <Icon src={"/icons/tag.svg"} alt={"tag"} />
              <span>
                Fou<b>rchette</b>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <Icon src={"/icons/tag.svg"} alt={"tag"} />
              <span>
                <b>Sport</b> ad<b>dict</b>
              </span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="flex flex-col gap-y-6 ">
          {/* Products */}
          <div className="space-y-3">
            <p className="font-extralight text-sm text-gray-400">Produits</p>
            <div className="flex gap-x-4">
              {/* Basic Product Cards */}
              {searchSuggestions.map((product, index) => (
                <BasicProductCard
                  key={index}
                  name={product.name}
                  imgSrc={product.img}
                  pricing={product.price}
                />
              ))}
            </div>
          </div>
          <button className="py-2 rounded w-full border text-base font-semibold hover:bg-gray-200">
            Voir tous les résultats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
