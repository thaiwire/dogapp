import React from "react";
import AppMenuItem from "./APP/COMPONENTS/AppMenuItem";
import { LiaDogSolid } from "react-icons/lia";

import AppMenuItemGroup from "./APP/COMPONENTS/AppMenuItemGroup";
import AppLeftPane from "./APP/COMPONENTS/AppLeftPane";
import { cn } from "@/lib/utils";

function page() {
  return (
    <div
      className={cn(
        " gap-1 flex flex-col bg-AppTertiary",
        "justify-start itmes-start"
      )}
    >
      <AppLeftPane />
    </div>
  );
}

export default page;
