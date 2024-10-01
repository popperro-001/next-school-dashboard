"use client";

import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";

import { studentsData } from "@/lib/data";
import BigCalendar from "@/components/BigCalendar";
import { Announcements } from "@/components/Announcements";
import Link from "next/link";
import { PerformanceChart } from "@/components/PerformanceChart";

const SingleStudentPage = () => {
  const params = useParams<{ id: string }>();
  const studentId = Number(params.id);

  const student = studentsData.find((student) => student.id === studentId);

  if (!student) return null;

  return (
    <div className="h-full p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={student.photo}
                alt={student.name}
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">{student.name}</h1>
              <p className="text-sm text-gray-500">
                {student.class}
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="blood type"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="blood type"
                    width={14}
                    height={14}
                  />
                  <span>{format(new Date("1-01-2025"), "MMM, yyyy")}</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    alt="blood type"
                    width={14}
                    height={14}
                  />
                  <span>{student.email}</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    alt="blood type"
                    width={14}
                    height={14}
                  />
                  <span>{student.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="">
                <h2 className="text-xl font-semibold">90%</h2>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="branch"
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="">
                <h2 className="text-xl font-semibold">{student.grade}</h2>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="lesson"
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="">
                <h2 className="text-xl font-semibold">18</h2>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="class"
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="">
                <h2 className="text-xl font-semibold">{student.class}</h2>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h2 className="text-xl font-semibold">Student&apos;s Schedule</h2>

          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold">Shortcuts</h2>

          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Teahers
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>

        <PerformanceChart />

        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
