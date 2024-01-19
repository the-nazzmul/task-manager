"use client";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "@/contexts/AuthContextsrc";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const { googleSignIn, user } = UserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await googleSignIn();
    router.push("/dashboard");
  };

  return (
    <div>
      <hr className="mb-6" />
      <button
        onClick={handleGoogleSignIn}
        className="btn flex items-center justify-center gap-2 w-full py-2 px-6 rounded-md bg-gradient-to-l from-teal-500 to-teal-200 text-gray-700 text-lg font-semibold"
      >
        <FcGoogle className="text-3xl"></FcGoogle> Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
