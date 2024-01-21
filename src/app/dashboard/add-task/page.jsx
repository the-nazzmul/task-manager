"use client";
import Container from "@/components/Containersrc";
import PrimaryButton from "@/components/PrimaryButtonsrc";
import { UserAuth } from "@/contexts/AuthContextsrc";
import { useTodo } from "@/contexts/TodoContextsrc";
import axios from "axios";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [descriptionCount, setDescriptionCount] = useState(0);

  const { tasks, setTasks } = useTodo();
  const {user} = UserAuth()

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setDescriptionCount(inputValue.length);
  };

  const onSubmit = async (data) => {
    const { title, description, deadline, priority } = data;

    const newTask = {
      title,
      description,
      deadline,
      priority,
    };

    

    const todoIndex = tasks.findIndex((task) => task.name === "Todo");

    const updatedTasks = [...tasks]
    updatedTasks[todoIndex] ={
      ...tasks[todoIndex],
      items: [...tasks[todoIndex].items, newTask]
    }

     axios.put(`http://localhost:4000/api/v1/users/tasks/${user.email}`, {
       tasks: updatedTasks,
     }).then((res)=>console.log(res));

    setTasks(updatedTasks);

    reset();
  };
  return (
    <Container>
      <div className=" py-16 h-screen w-full items-center">
        <form
          className="w-3/4 mx-auto space-y-4  p-8 bg-teal-400 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-5xl font-bold my-12 text-center">Add Task!</h1>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label>Description (max 30 characters)</label>
            <input
              type="text"
              placeholder="Description"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("description", {
                required: "Description is required",
                maxLength: {
                  value: 30,
                  message: "Description must not exceed 30 characters",
                },
              })}
              onChange={handleDescriptionChange}
            />
            <p className="text-gray-900 text-xs mt-1">
              Character count: {descriptionCount}/30
            </p>
            {errors.description && (
              <p className="text-red-600 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label>Deadline</label>
            <input
              type="date"
              placeholder="Deadline"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("deadline", { required: true })}
            />
          </div>
          <div>
            <label>Priority Level</label>
            <select
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("priority", { required: true })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <p className="text-red-600 text-xs mt-1">
                Priority level is required
              </p>
            )}
          </div>
          <div className="pt-2">
            <PrimaryButton block>
              <input className="cursor-pointer" type="submit" value="Add Task" />
            </PrimaryButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddTask;
