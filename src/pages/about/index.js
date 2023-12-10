// Copyright 1999-2023. Plesk International GmbH. All rights reserved.
import Navbar from "@/core/navbar";
import Footer from "@/core/footer";
import ImgAbout from "@/components/about/imgAbout";
import Statistik from "@/components/about/statistik";
import Collaborate from "@/components/about/Collaborate";
import OurClient from "@/components/about/OurClient";
import Jasa from "@/components/about/jasa";

export default function About() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <ImgAbout />
      <Statistik />
      <Collaborate />
      <OurClient />
      <Jasa />
      <Footer />
    </div>
  );
}
