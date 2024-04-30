import React from "react";
import CBAvatar from "./CBAvatar";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 py-3 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="flex items-center space-x-3">
        <CBAvatar />
        <h2 className="text-lg font-medium">Chatbot</h2>
      </div>
    </header>
  );
};

export default Navbar;
