"use client";
import Container from "@/components/Containersrc";
import TodoCard from "@/components/dashboard/TodoCardsrc";
import { useTodo } from "@/contexts/TodoContextsrc";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



const DashboardPage = () => {
 const { tasks, setTasks } = useTodo();

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedTasks = [...tasks];

      const taskSourceIndex = source.index;
      const taskDestinatonIndex = destination.index;

      const [removedTasks] = reorderedTasks.splice(taskSourceIndex, 1);
      reorderedTasks.splice(taskDestinatonIndex, 0, removedTasks);

      return setTasks(reorderedTasks);
    }

    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = tasks.findIndex(
      (item) => item.id === source.droppableId
    );
    const storeDestinationIndex = tasks.findIndex(
      (item) => item.id === destination.droppableId
    );

    const newSourceItems = [...tasks[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...tasks[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newTasks = [...tasks];

    newTasks[storeSourceIndex] = {
      ...tasks[storeSourceIndex],
      items: newSourceItems,
    };
    newTasks[storeDestinationIndex] = {
      ...tasks[storeDestinationIndex],
      items: newDestinationItems,
    };

    setTasks(newTasks);
  };

  return (
    <Container>
      <div className="p-8 h-screen bg-gradient-to-b from-slate-700 to-gray-500">
        <div className="bg-teal-400 rounded-md">
          <DragDropContext onDragEnd={handleDragAndDrop}>
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold py-16">My Tasks</h1>
            </div>
            <Droppable droppableId="ROOT" type="group">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" p-2 space-y-5"
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <TodoCard {...task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </Container>
  );
};



export default DashboardPage;
