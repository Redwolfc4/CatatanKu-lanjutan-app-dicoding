import React from "react";

const FooterCatatanKu = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex justify-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          CatatanKu App
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default FooterCatatanKu;
