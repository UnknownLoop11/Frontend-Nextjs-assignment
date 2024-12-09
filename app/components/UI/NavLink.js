import React, { memo } from "react";
import PropTypes from "prop-types";

// Next imports
import Link from "next/link";

const NavLink = ({ icon, title, to = "#", badgeValue }) => {
  return (
    <Link
      href={to}
      className="flex flex-row gap-x-2 px-1.5 items-center rounded-md hover:bg-gray-100"
    >
      {icon}
      <span className="text-xs font-semibold">{title}</span>

      {/* BADGE */}
      {badgeValue > 0 && (
        <span
          className="bg-gray-200 rounded-full py-0.5 px-2 font-semibold"
          style={{ fontSize: "0.6rem" }}
        >
          {badgeValue}
        </span>
      )}
    </Link>
  );
};

NavLink.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  badgeValue: PropTypes.number,
};

export default memo(NavLink);
