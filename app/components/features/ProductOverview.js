import React from "react";

// Next Imports
import Link from "next/link";

// UI Components
import Icon from "../common/Icon";
import IconButton from "../common/IconButton";
import Button from "../common/Button";
import Counter from "../UI/Counter";
import ImagesContainer from "../UI/ImagesContainer";

// Constants
import { productImages } from "@/app/utils/constants";

const ProductOverview = () => {
  return (
    // Container
    <div className="flex flex-col gap-y-4 p-4 md:p-6 text-xs">
      {/* Breadcrumbs */}
      <div className="flex gap-x-2">
        <Link href="/">Home</Link>
        <span>•</span>
        <span className="text-gray-400">Art de la table</span>
      </div>

      {/* Product Details and Image container */}
      <div className="flex flex-col md:flex-row md:items-stretch justify-evenly gap-6">
        {/* Images Container */}
        <ImagesContainer imgList={productImages} />

        {/* Product Details */}
        <div className="basis-1/2 flex flex-col gap-y-3 justify-between">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {/* Product Name and Price */}
            <div>
              {/* Product Name */}
              <div className="flex items-start justify-between">
                <h1 className="text-xl md:text-3xl font-serif">
                  Cheese – appareil à raclette 1/2 roue
                </h1>
                <IconButton src="/icons/heart.svg" alt="like" />
              </div>

              {/* Product Price */}
              <p className="text-xl md:text-2xl mb-1.5">
                39,50€
                <span className="text-xs font-light align-middle ml-1.5">
                  /piece
                </span>
              </p>
            </div>

            <hr />

            {/* Product Meta Data */}
            <div className="my-2 flex flex-row gap-x-2 text-base">
              <Icon src={"/icons/scale.svg"} alt={"scale"} size={24} />
              <p className="">
                20<sup>cm</sup>
              </p>
              <Icon src={"/icons/circle-stroke.svg"} alt={"circle"} size={24} />
              <p className="">
                50<sup>cm</sup>
              </p>
              <p className="ml-auto text-xs font-extralight">RÉF : VABGN5</p>
            </div>
            <hr />

            {/* Product About */}
            <div className="text-base">
              <p>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </p>
              <p>Réglable en hauteur</p>{" "}
              <p>Appareil à raclette professionnel</p>{" "}
              <p>Boîtier de chauffe horizontal réglable en hauteur</p>
              <br />
              <p>
                220V
                <br />
                900W
              </p>
            </div>
          </div>

          {/* Product Actions */}
          <div className="w-full flex gap-x-1.5">
            <Counter />
            <Button
              bgColor="#5CD2DD"
              title={"Ajouter au panier"}
              className="uppercase w-full text-center"
            />
          </div>
        </div>
      </div>

      {/* Product Description and Learn More */}
      <div className="mt-4 p-2 md:px-6 flex flex-col md:flex-row gap-y-6 items-center">
        {/* Product Description */}
        <div className="basis-2/5 text-sm space-y-2">
          <h2 className="text-xl font-semibold">Description produit</h2>
          <p>
            Festi vous propose à la location un/une &quot;Jewel – grand
            couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
            (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire
            ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
            rigoureuse par notre équipe. Il est en location chez nous sous la
            référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour
            que les événements de nos clients, même en last-minute, soient
            toujours une réussite. Vous pourrez trouver tout une série
            d&apos;autre produit à louer de ce type dans la catégorie &quot;Art
            de la Table&quot;.
          </p>
        </div>

        {/* Learn More */}
        <div className="w-full md:basis-1/2 md:ml-auto text-base uppercase">
          <div className="p-2 flex justify-between items-center bg-gray-100">
            <p className="font-semibold ">Livraisons</p>
            <span className="text-2xl">+</span>
          </div>
          <div className="p-2 flex justify-between items-center bg-gray-100">
            <p className="font-semibold ">Questions</p>
            <span className="text-2xl">+</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductOverview;
