import Image from "next/image";
import Link from "next/link";

import { Pagination } from "@/components/Pagination";
import { Table } from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import { format } from "date-fns";
import { FormModal } from "@/components/FormModal";

export type Event = {
  id: number;
  title: string;
  class: number;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Event Name",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden lg:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaSkyLight"
      >
        <td className="flex items-center gap-4 py-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        </td>

        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">
          {format(new Date(item.date), "yyyy-MMM-dd")}
        </td>
        <td className="hidden md:table-cell">{item.startTime}</td>
        <td className="hidden md:table-cell">{item.endTime}</td>

        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <FormModal table="event" type="update" data={item} />

                <FormModal table="event" type="delete" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md h-full mx-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>

            {role === "admin" && <FormModal type="create" table="event" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default EventListPage;
