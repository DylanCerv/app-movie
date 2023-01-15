import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function CardSearchMore({ url }) {
  return (
    <div className="w-auto h-[22rem] mx-2 flex flex-col justify-center items-center gap-1 my-auto">
        <img src="" alt="" />
        <Link to={url} className="hover:text-yellow-text uppercase font-bold text-2xl">
            mas
        </Link>
    </div>
  );
}
