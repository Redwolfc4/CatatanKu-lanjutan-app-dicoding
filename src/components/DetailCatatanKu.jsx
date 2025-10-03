import { Link } from "react-router";
import BodyCardCatatanKu from "./BodyCardCatatanKu";
import DeleteCatatanKu from "./DeleteCatatanKu";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const DetailCatatanKu = ({ id, title, body, createdAt, onHandleDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <section className="w-full flex justify-end">
        <Link
          to={`/detail/${id}`}
          className="text-gray-600 hover:text-white text-2xl"
        >
          <FiExternalLink />
        </Link>
      </section>
      <div className="p-6">
        <BodyCardCatatanKu
          title={title}
          description={body}
          createdAt={createdAt}
        />
        <DeleteCatatanKu onDeleteHandler={onHandleDelete} id={id} />
      </div>
    </div>
  );
};

export default DetailCatatanKu;
