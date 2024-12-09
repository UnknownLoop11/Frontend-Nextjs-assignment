"use client";

import React, { useState } from "react";

// Components
import Tab from "./Tab";

// Constants
import { tabs } from "@/app/utils/constants";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mt-3 w-full flex flex-row justify-between gap-x-2 overflow-x-auto">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab}
          isActive={activeTab === tab}
          onClick={(value) => {
            setActiveTab(value);
          }}
        />
      ))}
    </div>
  );
};

export default TabsContainer;
