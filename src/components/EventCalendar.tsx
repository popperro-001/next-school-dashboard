"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import Image from "next/image";

import { eventsData } from "@/lib/data";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>

        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {eventsData.slice(0, 3).map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>

              <span className="text-xs text-gray-400">{format(new Date(event.date), "PP")}</span>
            </div>

            <p className="mt-2 text-gray-400 text-sm">
              {event.class} {event.startTime} {event.endTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
