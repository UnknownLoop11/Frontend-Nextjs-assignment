"use client";

import React, { memo } from "react";
import PropTypes from "prop-types";

const Tab = ({ title, isActive = false, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <div
      className={`cursor-pointer uppercase flex-shrink-0 text-sm p-2 border-b-2 border-gray-100 ${
        isActive ? "text-primary font-semibold border-primary" : "no-underline"
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default memo(Tab);
