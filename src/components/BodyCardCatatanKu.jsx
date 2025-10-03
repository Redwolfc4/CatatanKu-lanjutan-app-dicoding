import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";

const BodyCardCatatanKu = ({ title, description, createdAt }) => {
  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
        {title}
      </h5>
      <p className="mb-3 h-[4.5rem] line-clamp-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
        {parser(description)}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
        {showFormattedDate(createdAt)}
      </p>
    </>
  );
};

export default BodyCardCatatanKu;
