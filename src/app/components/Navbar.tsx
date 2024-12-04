"use client";

import React from "react";
import { useState } from "react";

import { Menu, MenuItem, ProductItem } from "@/components/ui/NavbarMenu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("Home");

  return (
    <div>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          {/* Home submenu content */}
          <ProductItem
            title="Welcome Home"
            description="Explore our platform"
            href="/"
            src="/images/home.png"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          {/* About submenu content */}
          <ProductItem
            title="About Us"
            description="Learn more about us"
            href="/about"
            src="/images/about.png"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Dashboard">
          {/* Dashboard submenu content */}
          <ProductItem
            title="Your Dashboard"
            description="Access your tools"
            href="/dashboard"
            src="/images/dashboard.png"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
