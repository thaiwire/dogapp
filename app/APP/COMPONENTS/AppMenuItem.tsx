import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function AppMenuItem({ link, text, icon }: TitleIcon) {
  return (
    <Link
      href={link}
      className={cn(
        "hover:bg-AppPrimary hover:cursor-pointer text-white  w-[110px] h-[60px] CENTER gap-2 rounded-md pl-3 pr-2",
        "justify-start font-bold text-lg"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default AppMenuItem;
