import React, { memo } from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";

const Icon = ({ src, alt, size = 20, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading="lazy"
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Icon);
