"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";

const Avatar = ({ src, user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(
    () => setIsDropdownOpen((prev) => !prev),
    []
  );

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="flex flex-row gap-x-1 lg:gap-x-4 items-center relative">
      {/* Avatar Display */}
      <Image
        src={src}
        alt="avatar"
        width={44}
        height={44}
        className="rounded-full"
      />
      {/* User Name and Dropdown actions */}
      <div
        className="cursor-pointer flex flex-row gap-x-2 p-2 rounded-md items-center hover:bg-gray-100"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <span className="text-sm font-semibold">{user}</span>
        <Image
          src={"/icons/arrow.svg"}
          alt={"dropdown-arrow"}
          width={12}
          height={12}
        />
        {/* Account Actions */}
        {isDropdownOpen && (
          <div className="absolute z-10 top-12 -right-4 w-52 mt-2 flex flex-col gap-y-1 border bg-white rounded shadow-md">
            <span className="cursor-pointer text-sm p-2 text-gray-600 hover:bg-gray-100">
              My cart
            </span>
            <span className="cursor-pointer text-sm p-2 text-gray-600 hover:bg-gray-100">
              Account settings
            </span>
            <span className="cursor-pointer text-sm p-2 text-gray-600 hover:bg-gray-100">
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default memo(Avatar);
