"use client";

import React, { useState } from "react";

// Components
import Icon from "../common/Icon";
import IconButton from "../common/IconButton";
import Navigation from "./Navigation";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* DRAWER BUTTON */}
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Icon
          src={"/icons/menu.svg"}
          alt={"menu"}
          size={48}
          className="border rounded-md"
        />
      </div>

      {/* DRAWER CONTENT */}
      {isOpen && (
        <div>
          {/* BACKDROP */}
          <div
            style={{ zIndex: 9998 }}
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setIsOpen(false)} // Close drawer on backdrop click
          ></div>

          {/* DRAWER PANEL */}
          <div
            style={{ zIndex: 9999 }}
            className={`fixed top-0 left-0 h-full w-72 bg-gray-50 border-2  transform transition-transform ${
              isOpen ? "animate-slideIn" : "animate-slideOut"
            }`}
          >
            <div className="p-6 space-y-8">
              <div className="flex items-center justify-between">
                <Icon
                  src={"/brand-title.png"}
                  alt={"brand-title"}
                  size={128}
                  className="h-4"
                />
                <IconButton
                  src={"/icons/close-square.svg"}
                  alt="close"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <Navigation className={"gap-y-6"} vertical />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
