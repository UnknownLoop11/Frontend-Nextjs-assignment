"use client";

import React, { memo } from "react";
import PropTypes from "prop-types";

// Components
import Icon from "./Icon";

const IconButton = ({ src, alt, size = 32, onClick, className }) => {
  return (
    <button className={`p-1 ${className}`} onClick={onClick}>
      <Icon src={src} alt={alt} size={size} />
    </button>
  );
};

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default memo(IconButton);
