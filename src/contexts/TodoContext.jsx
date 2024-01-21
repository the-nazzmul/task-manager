"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserAuth } from "./AuthContext";

// const DATA = [
//   {
//     _id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
//     name: "Todo",
//     items: [],
//     tint: 1,
//   },
//   {
//     _id: "487f68b4-1746-438c-920e-d67b7df46247",
//     name: "In-progress",
//     items: [],
//     tint: 2,
//   },
//   {
//     _id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
//     name: "Completed",
//     items: [],
//     tint: 3,
//   },
// ];

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  // console.log("from context", tasks);

  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:4000/api/v1/users/${user.email}`)
        .then((res) => {
          setTasks(res.data.data);
        });
    }
  }, [user]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
