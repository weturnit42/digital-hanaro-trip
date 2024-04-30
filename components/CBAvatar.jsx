"use client";
import React from "react";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
const CBAvatar = () => {
  return (
    <>
      <Avatar className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black font-bold border-white border-2">
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
    </>
  );
};

export default CBAvatar;
