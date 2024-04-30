"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CBResponse from "@/components/CBResponse";
import UserText from "@/components/UserText";
import { useChat } from "./provider";

export default function Home() {
  const [input, setInput] = useState(""); // State to hold the input value
  const { messages, addMessage } = useChat(); // Using the modified chat context

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form default behavior
    if (!input.trim()) return; // Exit if input is empty

    const url = "http://3.104.102.40/api"; // Your API endpoint
    const data = { data1: input }; // Prepare the data to send

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res);
        if (res.key) {
          addMessage(input, "user"); // Add user message to the context
          addMessage(res.key, "bot"); // Add bot response to the context
        }
        setInput(""); // Clear the input after submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col h-[90vh] max-h-[90vh] bg-gray-100 dark:bg-gray-800 shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message, index) =>
            message.type === "bot" ? (
              <CBResponse key={index} id={index} text={message.text} />
            ) : (
              <UserText key={index} id={index} text={message.text} />
            )
          )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-gray-950 px-4 py-3 flex items-center space-x-2"
      >
        <Input
          className="flex-1"
          placeholder="Type a message"
          value={input}
          onChange={handleInputChange}
          id="messageInput"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
