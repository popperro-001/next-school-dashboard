import Image from "next/image";
import Link from "next/link";

import { menuItems } from "@/constants";
import { role } from "@/lib/data";

export const Menu = () => {
  return (
    <div className="text-sm h-full p-4 flex flex-col">
      <Link
        href="/"
        className="flex items-center justify-center lg:justify-start gap-2"
      >
        <Image src="/logo.png" alt="logo" width={32} height={32} />

        <span className="hidden lg:block font-bold">School</span>
      </Link>

      <div className="mt-4 flex-1 overflow-y-scroll no-scrollbar">
        {menuItems.map(({ items, title }) => (
          <div key={title} className="flex flex-col gap-2">
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {title}
            </span>

            {items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-lamaSkyLight md:px-2 transition-colors duration-500"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                    />

                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
