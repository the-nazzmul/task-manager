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

const Register = () => {
  const { createUser } = UserAuth();
 const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    createUser(email, password);
    router.push('/')
  };
  return (
    <Container>
      <div className=" py-16 h-full w-full  grid grid-cols-2 items-center border bg-gradient-to-br from-orange-200">
        <div className="flex items-center justify-center">
          <Image
            src={LoginImage}
            height={400}
            width={400}
            alt="image"
            className="h-2/3 w-2/3"
          />
        </div>
        <form
          className="w-3/4 mx-auto space-y-4  p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-5xl font-bold my-12 text-center">
            Please Register!
          </h1>
          {/* <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("name", { required: true })}
            />
          </div> */}
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
              placeholder="Password"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-xs mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-xs mt-1">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 text-xs mt-1">
                Password must not exceed 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-xs mt-1">
                Password must have one uppercase letter, one lowercase letter,
                one special character and one number
              </p>
            )}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="p-2 block bg-gray-100 border-2 border-black rounded-md w-full"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-xs mt-1">
                Both passwords must match
              </p>
            )}
          </div>
          <div className="pt-2">
            <PrimaryButton block>
              <input type="submit" value="Register" />
            </PrimaryButton>
          </div>
          <small>
            Already have an account?{" "}
            <Link href={"/login"} className="text-red-600">
              Login
            </Link>
          </small>
          <SocialLogin />
        </form>
      </div>
    </Container>
  );
};

export default Register;
