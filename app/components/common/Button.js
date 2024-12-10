// "use client";

import React, { memo } from "react";
import PropTypes from "prop-types";

const Button = ({
  title,
  //   onClick = () => {},
  startIcon,
  endIcon,
  bgColor = "#0093D0",
  className = "",
}) => {
  return (
    <button
      className={`flex flex-row gap-x-1 items-center py-3 px-4 text-xs font-sembold text-white rounded-md contrast-200 hover:opacity-75 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {startIcon}
      <span className="mx-auto">{title}</span>
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  //   onClick: PropTypes.func,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  className: PropTypes.string,
};

export default memo(Button);
