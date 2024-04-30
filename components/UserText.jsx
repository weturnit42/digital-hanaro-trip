import React from "react";
import UserAvatar from "./UserAvatar";

const UserText = ({ id, text }) => {
  return (
    <div className="flex items-start space-x-3 justify-end">
      <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
        <p id={id}>{text}</p>
      </div>
      <UserAvatar />
    </div>
  );
};

export default UserText;
