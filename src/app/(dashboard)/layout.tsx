import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />

        <div className='mt-[60px] flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
