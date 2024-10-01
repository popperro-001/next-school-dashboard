"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Performance</h2>

        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-bold">9.2</h2>
        <p className="text-xs text-gray-300">of 10 max LTS</p>
      </div>

      <div className="absolute bottom-16 left-0 right-0 m-auto text-center">
        <h2 className="font-medium">1st Semester - 2nd Semester</h2>
      </div>
    </div>
  );
};