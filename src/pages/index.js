// Copyright 1999-2023. Plesk International GmbH. All rights reserved.

import Navbar from "@/core/navbar";
import ImgHome from "@/components/home/imgHome";
import Expertise from "@/components/home/expertise";
import Upcoming from "@/components/home/upcoming";
import LeanMore from "@/components/home/leanMore";
import Footer from "@/core/footer";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <ImgHome />
      <Expertise />
      <Upcoming />
      <LeanMore />
      <Footer />
    </div>
  );
}
