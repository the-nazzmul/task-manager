"use client";
import Container from "@/components/Containersrc";
import Footer from "@/components/Footersrc";
import Navbar from "@/components/Navbarsrc";
import Banner from "@/components/home/Bannersrc";
import Consumers from "@/components/home/Consumerssrc";
import { UserAuth } from "@/contexts/AuthContextsrc";

export default function Home() {
  const {user} = UserAuth()
  console.log(user);
  return (
    <Container>
      <div className="h-full pt-20">
        <Banner />
        <Consumers />
      </div>
    </Container>
  );
}
