import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const TodoCard = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={` flex flex-col space-y-2 p-4 bg-zinc-300 rounded-lg h-fit`}
        >
          <div className="font-bold rounded-md">
            <h3 className="p-2 text-center bg-black text-white rounded-t-md text-lg">
              {name}
            </h3>
            <div className="grid grid-cols-4 bg-gray-100 py-2 px-4 rounded-b-md ">
              <h1>Title</h1>
              <h1>Description</h1>
              <h1>Deadline</h1>
              <h1>Priority</h1>
            </div>
          </div>
          <div className="space-y-2">
            {items.length === 0 ? (
              // Render default div when items array is empty
              <div className="bg-gradient-to-l from-orange-400 to-orange-300 py-2 px-4  rounded-md">
                <h1 className="font-semibold text-center">No items yet. Add items here...</h1>
              </div>
            ) : (
              // Render items when items array is not empty
              items.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="bg-gradient-to-l from-orange-400 to-orange-300 py-2 px-4 grid grid-cols-4 rounded-md"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <h4 className="font-semibold">{item.title}</h4>
                      <h4>{item.description}</h4>
                      <h4>{item.deadline}</h4>
                      <h4>{item.priority}</h4>
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default TodoCard;
