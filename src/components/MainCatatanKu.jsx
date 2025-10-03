import React from "react";
import DetailCatatanKu from "./DetailCatatanKu";
import { deleteNote, getAllNotes } from "../utils/local-data";

const MainCatatanKu = ({ searchQuery, listCatatan, setListCatatan }) => {
  const onHandleDelete = (id) => {
    deleteNote(id);
    setListCatatan(getAllNotes());
  };

  let filteredCatatan = listCatatan.filter((catatan) => {
    return (
      catatan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      catatan.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // tentukan apa yang ditampilkan dengan if-else
  let content;
  if (filteredCatatan.length > 0 && searchQuery.length > 0) {
    // 1. jika hasil pencarian ada
    content = filteredCatatan.map((catatan) => (
      <DetailCatatanKu
        key={catatan.id}
        {...catatan}
        onHandleDelete={onHandleDelete}
      />
    ));
  } else if (listCatatan.length > 0 && searchQuery.length === 0) {
    // 2. jika pencarian kosong tapi listCatatan masih ada
    content = listCatatan.map((catatan) => (
      <DetailCatatanKu
        key={catatan.id}
        {...catatan}
        onHandleDelete={onHandleDelete}
      />
    ));
  } else {
    // 3. jika benar-benar kosong
    content = (
      <p className="text-center col-span-full text-gray-500 font-medium">
        Tidak ada Catatan
      </p>
    );
  }

  return (
    <>
      <section
        id="listCatatan"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {content}
      </section>
    </>
  );
};

export default MainCatatanKu;
