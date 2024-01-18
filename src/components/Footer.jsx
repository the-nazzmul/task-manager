import React from "react";
import Container from "./Container";
import Link from "next/link";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
      <div className="py-20 bg-black text-white flex items-center justify-center">
        <div className="w-ful text-center">
          <h1 className="text-5xl font-bold text-white">
            cler<span className="text-orange-500">K</span>
          </h1>
          <ul className="my-4">
            <li>
              <Link href={"/about"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center gap-2">
            <Link href={"/"}>
              <FaFacebook size={24}/>
            </Link>
            <Link href={"/"}>
              <FaSquareXTwitter size={24}/>
            </Link>
            <Link href={"/"}>
              <FaInstagram size={24}/>
            </Link>
          </div>
          <p className="text-sm mt-8">
            Copyright © 2024{" "}
            <span className="text-xl font-semibold">clerK</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
