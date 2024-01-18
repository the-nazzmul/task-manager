"use client";
import Container from "@/components/Containersrc";
import Footer from "@/components/Footersrc";
import Navbar from "@/components/Navbarsrc";
import Banner from "@/components/home/Bannersrc";
import Consumers from "@/components/home/Consumerssrc";


export default function Home() {
 
  return (
    <main className="relative">
      <div className="fixed w-full top-0 z-10">
        <Navbar />
        <h1>hqa</h1>
      </div>
      <Container>
        <div className="h-screen pt-2">
          <Banner />
          <Consumers />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
