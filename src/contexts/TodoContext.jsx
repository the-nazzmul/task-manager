"use client";
import React, { createContext, useContext, useState } from "react";

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Todo",
    items: [],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "In-progress",
    items: [],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Completed",
    items: [],
    tint: 3,
  },
];

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(DATA);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
