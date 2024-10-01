import Image from "next/image";
import Link from "next/link";

import { Pagination } from "@/components/Pagination";
import { Table } from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { examsData, resultsData, role } from "@/lib/data";
import { format } from "date-fns";
import { FormModal } from "@/components/FormModal";

export type Result = {
  id: number;
  subject: string;
  class: number;
  teacher: string;
  student: string;
  score: number;
  type: "exam" | "assignment";
  date: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden lg:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
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
    header: "Actions",
    accessor: "action",
  },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaSkyLight"
      >
        <td className="flex items-center gap-4 py-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.subject}</h3>
          </div>
        </td>

        <td>{item.student}</td>
        <td className="hidden md:table-cell">{item.score}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">
          {format(new Date(item.date), "yyyy-MMM-dd")}
        </td>

        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <FormModal table="result" type="update" data={item} />

                <FormModal table="result" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>

            {role === "admin" && <FormModal type="create" table="result" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;
