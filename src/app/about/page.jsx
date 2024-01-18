import Container from "@/components/Containersrc";
import Footer from "@/components/Footersrc";
import Navbar from "@/components/Navbarsrc";
import React from "react";

const AboutPage = () => {
  return (
    <main className="relative">
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      <Container>
        <div className="h-screen pt-2">
         
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutPage;
