"use client";
import React, { useContext, useState } from "react";
import Container from "../Container";
import Sidebar from "./Sidebar";
import { useTodo } from "@/contexts/TodoContextsrc";





const Dashboard = ({ children }) => {

 const {tasks, setTasks} = useTodo()

  return (
    <Container>
      <div className="grid grid-cols-12 pt-20">
        <div className="col-span-2 bg-gradient-to-b from-teal-500 to-teal-200 h-screen">
          <Sidebar tasks={tasks}/>
        </div>
        <main className="col-span-10 ">{children}</main>
      </div>
    </Container>
  );
};

export default Dashboard;
