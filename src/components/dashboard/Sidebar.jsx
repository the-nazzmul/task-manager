"use client";
import Link from "next/link";
import { GrTasks, GrEdit } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";

const Sidebar = () => {
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
