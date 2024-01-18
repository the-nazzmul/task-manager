"use client";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { UserAuth } from "@/contexts/AuthContextsrc";

const Navbar = () => {
  const { user } = UserAuth();
  console.log(user);
  return (
    <Container>
      <div className="h-20 flex items-center justify-between bg-gradient-to-b from-black to-slate-700 w-full text-white px-8 ">
        <div>
          <h1 className="text-5xl font-bold text-white">
            cler<span className="text-orange-500">K</span>
          </h1>
        </div>

        <ul className="flex items-center space-x-6">
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/r"}>Register</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
