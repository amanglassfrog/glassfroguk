"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "w-full mx-auto" : "w-full"
      } bg-white shadow-md py-4 px-6 rounded-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/logo.svg" alt="Logo" className="h-12" />
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
