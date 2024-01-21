"use client";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { UserAuth } from "@/contexts/AuthContextsrc";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  
  return (
    <Container>
      <div className="h-20 flex items-center justify-between bg-gradient-to-b from-black to-slate-700 w-full text-white px-8 ">
        <div>
          <Link href={"/"} className="text-5xl font-bold text-white">
            cler<span className="text-orange-500">K</span>
          </Link>
        </div>

        <ul className="flex items-center space-x-6">
          <li className="hover:text-orange-500 hover:scale-105 duration-200">
            <Link href={"/"}>Home</Link>
          </li>

          {!user ? (
            <>
              <li className="hover:text-orange-500 hover:scale-105 duration-200">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="hover:text-orange-500 hover:scale-105 duration-200">
                <Link href={"/register"}>Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-orange-500 hover:scale-105 duration-200">
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li className="hover:text-orange-500 hover:scale-105 duration-200 flex gap-2">
                <button onClick={logOut}>Logout</button>

                <img
                  src={user.photoURL}
                  alt="user image"
                  className="w-8 rounded-full border-2"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
