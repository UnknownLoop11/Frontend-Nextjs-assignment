// React imports
import React from "react";

// Layout Components
import { Footer, Header } from "./components";

// Feature Components
import {
  ProductOverview,
  SimilarProducts,
  PersonalizedProducts,
  SignUpBanner,
} from "./components";

const ProductHome = () => {
  return (
    <>
      <Header />
      <ProductOverview /> {/* Product Details */}
      <SimilarProducts /> {/* Similar Products List View */}
      <hr />
      {/* Personalized Products (Products that might interest user) */}
      <PersonalizedProducts />
      <SignUpBanner /> {/* SignUp Banner */}
      <Footer />
    </>
  );
};

export default ProductHome;
