"use client";

import React, { memo } from "react";
import PropTypes from "prop-types";

// Components
import NavLink from "./NavLink";
import Icon from "../common/Icon";
import Button from "../common/Button";

const Navigation = ({ vertical = false, className }) => {
  return (
    <nav
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } gap-3 lg:gap-x-8 ${className}`}
    >
      <NavLink
        icon={<Icon src={"/icons/light-bulb.svg"} alt={"light-bulb"} />}
        title="Inspirations"
      />
      <NavLink
        icon={<Icon src={"/icons/heart.svg"} alt={"heart"} />}
        title="Mes favoris"
        badgeValue={24}
      />
      <Button
        title={"Panier"}
        startIcon={
          <Icon
            src={"/icons/shopping-cart.svg"}
            alt={"shopping-cart"}
            size={18}
          />
        }
      />
    </nav>
  );
};

Navigation.propTypes = {
  vertical: PropTypes.bool, // Updated to match the prop
};

export default memo(Navigation);
