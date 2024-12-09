import React from "react";

// Next imports
import Image from "next/image";
import Link from "next/link";

// Components
import SearchBar from "../UI/SearchBar";
import Navigation from "../UI/Navigation";
import Avatar from "../UI/Avatar";
import Drawer from "../UI/Drawer";
import TabsContainer from "../UI/TabsContainer";

const Header = () => {
  return (
    <header className="w-full bg-white pt-2 px-2 md:px-6 md:pt-6 sticky top-0 z-50">
      <div className="flex flex-row md:gap-x-3 lg:gap-x-6 justify-between">
        {/* DRAWER */}
        <Drawer />
        {/* BRAND LOGO */}
        <Link href={"/"} className="flex flex-col items-center gap-y-2">
          <Image
            src={"/brand-logo.png"}
            alt="Logo"
            width={42}
            height={42}
            priority
          />
          <Image
            src="/brand-title.png"
            alt="Title"
            width={111}
            height={111}
            priority
          />
        </Link>

        {/* SEARCH BAR */}
        <SearchBar />

        {/* NAVIGATION (links) */}
        <div className="max-md:hidden ml-auto">
          <Navigation />
        </div>

        {/* AVATAR (profile/account) */}
        <Avatar src={"/avatar.jpeg"} user={"FR"} />
      </div>

      {/* TABS (sliding tabs container) */}
      <TabsContainer />
    </header>
  );
};

export default Header;
