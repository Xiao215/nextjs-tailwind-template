import React, { useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import useWindowSize from "../../hooks/useWindowSize";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  return (
    <div className="relative z-50 select-none">
      <div className="w-full px-5 md:px-10 lg:px-48 py-4 lg:py-6 fixed top-0"></div>
    </div>
  );
};

export default Nav;
