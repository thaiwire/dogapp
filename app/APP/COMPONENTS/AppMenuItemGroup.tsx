import React from "react";
import MenuItemList from "./CONSTANTS/MenuItemList";
import AppMenuItem from "./AppMenuItem";

function AppMenuItemGroup() {
  return (
    <>
      {MenuItemList.map((item) => (
        // <span key={item.id}>{item.title}</span>
        <AppMenuItem
          key={item.id}
          link={item.link}
          text={item.title}
          icon={item.icon}
        />
      ))}
    </>
  );
}

export default AppMenuItemGroup;
