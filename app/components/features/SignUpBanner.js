import React from "react";

// Next Imports
import Image from "next/image";

// UI Components
import Button from "../common/Button";
import Icon from "../common/Icon";

const SignUpBanner = () => {
  return (
    <section id="signup-banner">
      <div
        className="p-8 md:p-16 mt-12 space-y-16 text-center rounded-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 65, 151, 0.1), rgba(255, 255, 255, 0.25))",
        }}
      >
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-4xl">
            On s’occupe de{" "}
            <span className="text-secondary contrast-125">tout</span>
          </h2>
          <p className="text-sm font-light">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        {/* Features */}
        <Image
          src={"/features.png"}
          alt="features"
          width={820}
          height={300}
          className="mx-auto max-sm:aspect-auto max-sm:scale-110"
        />

        {/* SignUp */}
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          <Image
            src={"/image.png"}
            alt="image"
            width={700}
            height={300}
            className="rounded-xl max-sm:aspect-video"
          />
          <div
            style={{ backgroundColor: "rgba(255, 243, 249, 1)" }}
            className="p-6 flex flex-col gap-y-4 justify-evenly rounded-xl text-start shadow-md"
          >
            <h3 className="text-4xl">
              S{"'"}inscrire & économiser
              <span className="text-secondary contrast-125"> 10%</span>
            </h3>
            <p className="text-xs md:text-sm font-light">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn{"'"}t. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>

            <div className="flex gap-x-3">
              <input
                type="text"
                placeholder="john@doe.com"
                className="w-full p-2 rounded-lg"
              />
              <Button
                title={"S’inscrire"}
                endIcon={<Icon src={"/icons/arrow-right.svg"} alt={"arrow"} />}
                className="uppercase p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
