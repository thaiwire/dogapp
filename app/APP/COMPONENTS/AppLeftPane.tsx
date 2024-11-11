import React from "react";
import AppMenuItemGroup from "./AppMenuItemGroup";
import Image from "next/image";
import { cn } from "@/lib/utils";

function AppLeftPane() {
  return (
    <div
      className={cn(
        "flex flex-col bg-AppSecondary h-screen w-[170px] CENTER pt-10",
        " flex-col gap-10 pt-200"
      )}
    >
      <div>
        <Image src="/logo2.svg" width={30} height={70} alt="Dog App " />
      </div>

      <div className={cn(" CENTER gap-4", " flex-col")}>
        <AppMenuItemGroup />
      </div>
    </div>
  );
}

export default AppLeftPane;
