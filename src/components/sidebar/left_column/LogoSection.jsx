import React from "react";
import sociality_logo from "../../../img/Sociality-logo.png";
export default function LogoSection({openness}) {
  return (
    <div className={`bg-[#303438] ${openness && "hidden sm:w-full"} bg-[#31363b] h-12`}>
      <img src={sociality_logo} className="mx-auto py-3" alt=""></img>
    </div>
  );
}
