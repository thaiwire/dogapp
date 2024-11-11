"use client";

import { AppSlider } from "@/app/APP/COMPONENTS/AppSlider";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const Params = useParams();

  useEffect(() => {
    // alert("Inside beed folder " + Params.breed);
    // alert("");
    const GetData = async () => {
      await fetch("https://dog.ceo/api/breed/hound/images")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    };
    GetData();
  }, []);

  return <div>Inside beed folder {Params.breed}</div>;
}

export default Page;
