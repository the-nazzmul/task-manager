"use client";
import Container from "@/components/Containersrc";
import PrimaryButton from "@/components/PrimaryButtonsrc";
import { useTodo } from "@/contexts/TodoContextsrc";

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

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setDescriptionCount(inputValue.length);
  };

  const onSubmit = async (data) => {
    const { title, description, deadline, priority } = data;

    const newTask = {
      id: Math.random().toString(),
      title,
      description,
      deadline,
      priority,
    };

    const updatedTasks = [
      {
        ...tasks[0],
        items: [...tasks[0].items, newTask],
      },
      ...tasks.slice(1),
    ];

    setTasks(updatedTasks);

    reset();
  };
  return (
    <Container>
      <div className=" py-16 h-screen w-full items-center bg-gradient-to-b from-slate-700 to-gray-500">
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
              <input type="submit" value="Add Task" />
            </PrimaryButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddTask;
