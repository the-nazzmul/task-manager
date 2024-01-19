"use client";

import Container from "@/components/Containersrc";
import PrimaryButton from "@/components/PrimaryButtonsrc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../../public/assets/login.svg";
import SocialLogin from "@/components/SocialLoginsrc";
import { UserAuth } from "@/contexts/AuthContextsrc";
import { useRouter } from "next/navigation";

const Login = () => {
  const { signIn } = UserAuth();
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    signIn(email, password);
    router.push("/dashboard");
  };

  return (
    <Container>
      <div className="py-16 h-full w-full  grid grid-cols-2 items-center border bg-gradient-to-bl from-orange-200">
        <form
          className="w-3/4 mx-auto space-y-4  p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-5xl font-bold my-12 text-center">
            Please Login!
          </h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("password", { required: true })}
            />
          </div>
          <div className="pt-2">
            <PrimaryButton block>
              <input type="submit" value="Login" />
            </PrimaryButton>
          </div>
          <small>
            New here?
            <Link href={"/register"} className="text-red-600">
              Register
            </Link>
          </small>
          <SocialLogin />
        </form>
        <div className="flex items-center justify-center">
          <Image
            src={LoginImage}
            height={400}
            width={400}
            alt="image"
            className="h-2/3 w-2/3"
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
