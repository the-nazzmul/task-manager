"use client";
import Link from "next/link";
import { GrTasks, GrEdit } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useTodo } from "@/contexts/TodoContextsrc";

const Sidebar = () => {
  const { tasks } = useTodo();
  const incompleteTasks = tasks?.find((task)=> task.name === 'Todo')
  return (
    <nav className="py-6 px-4">
      <ul className="space-y-2">
        <li>
          <Link
            href={"/dashboard"}
            className="btn bg-gradient-to-tr from-orange-500 to-orange-300  text-center px-4 py-2 rounded-md text-white text-lg font-semibold flex items-center justify-start gap-2 "
          >
            <GrTasks />
            Tasks
            <button className="bg-white text-sm rounded-full px-2 text-red-500">
              {incompleteTasks?.items.length ? incompleteTasks?.items.length : 0}
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/add-task"}
            className="btn bg-gradient-to-tr from-orange-500 to-orange-300  text-center px-4 py-2 rounded-md text-white text-lg font-semibold flex items-center justify-start gap-2 "
          >
            <GrEdit />
            Add Task
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="btn bg-gradient-to-tr from-orange-500 to-orange-300  text-center px-4 py-2 rounded-md text-white text-lg font-semibold flex items-center justify-start gap-2 "
          >
            <FaHome />
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
