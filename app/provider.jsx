import React, { createContext, useReducer, useContext } from "react";

// Create a context
const ChatContext = createContext();

// Action types for reducer
const ActionTypes = {
  ADD_MESSAGE: "ADD_MESSAGE",
};

// Reducer function to manipulate state
function chatReducer(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      // Append message with current timestamp
      return {
        ...state,
        messages: [
          ...state.messages,
          { ...action.payload, timestamp: Date.now() },
        ],
      };
    default:
      return state;
  }
}

// Initial state of the context
const initialState = {
  messages: [],
};

// ChatProvider component that provides the state and dispatcher
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Function to add a message
  function addMessage(text, sender) {
    dispatch({
      type: ActionTypes.ADD_MESSAGE,
      payload: { text, type: sender },
    });
  }

  // Values provided by the context
  const value = {
    messages: state.messages,
    addMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

// Custom hook to use the chat context
export function useChat() {
  return useContext(ChatContext);
}
