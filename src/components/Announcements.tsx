import { announcementsData } from "@/lib/data";
import { format } from "date-fns";
import Image from "next/image";

export const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-2">Announcements</h1>

        <span className="text-xs text-gray-400">View All</span>
      </div>

        <div className='flex flex-col gap-4 mt-4'>
            {announcementsData.slice(0, 3).map((announcement) => (
                <div className="bg-lamaSkyLight rounded-md p-4  even:bg-lamaYellowLight odd:bg-lamaPurpleLight"
                key={announcement.id}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-gray-600">{announcement.title}</h2>
    
                  <span className="text-xs text-gray-400 bg-white p-1 rounded-md">{format(new Date(announcement.date), "PP")}</span>
                </div>
    
                <p className="mt-1 text-gray-400 text-sm">
                  {announcement.class}
                </p>
              </div>
            ))}
        </div>
    </div>
  );
};
