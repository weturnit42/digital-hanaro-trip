import React from "react";
import CBAvatar from "./CBAvatar";
const CBResponse = ({ id, text }) => {
  return (
    <div className="flex items-start space-x-3">
      <CBAvatar />
      <div className="bg-white dark:bg-gray-950 dark:text-gray-200 rounded-lg p-3 max-w-[70%]">
        <p id={id}>{text}</p>
      </div>
    </div>
  );
};

export default CBResponse;
