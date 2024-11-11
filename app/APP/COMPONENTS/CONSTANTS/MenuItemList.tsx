import { LiaDogSolid } from "react-icons/lia";
import { GiJumpingDog } from "react-icons/gi";
import { LuDog } from "react-icons/lu";
import { TbDog } from "react-icons/tb";

const MenuItemList = [
  {
    id: 0,
    title: "Bouvier",
    link: "/breed",
    icon: <LiaDogSolid />,
  },
  {
    id: 1,
    title: "Airedale",
    link: "/breed/Airedale",
    icon: <GiJumpingDog />,
  },
  {
    id: 2,
    title: "Atika",
    link: "/breed/Atika",
    icon: <LuDog />,
  },
  {
    id: 3,
    title: "Bluetick",
    link: "/breed/Bluetick",
    icon: <TbDog />,
  },
  {
    id: 4,
    title: "Number",
    link: "/Bluetick",
    icon: <TbDog />,
  },
];

export default MenuItemList;
