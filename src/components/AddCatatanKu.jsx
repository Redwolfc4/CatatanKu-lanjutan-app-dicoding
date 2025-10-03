import React from "react";

import FormCatatanKu from "../pages/FormCatatanKu";

const AddCatatanKu = ({ onSubmitHandler }) => {
  return (
    <div className="h-full max-w-xl mx-auto my-15">
      <h1 className="text-3xl font-bold mb-4">Tambah Catatan</h1>
      <FormCatatanKu onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default AddCatatanKu;
