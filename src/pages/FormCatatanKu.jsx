import { useParams } from "react-router";
import { getNote } from "../utils/local-data";
import { useEffect } from "react";
import { useState } from "react";
const FormCatatanKu = ({
  onInputHandler,
  onSubmitHandler,
  onTitleChangeHandler,
  setBody,
  setTitle,
  title,
  body,
}) => {
  const { id } = useParams();

  const getCurrentNote = getNote(id);
  // state untuk kontrol tombol
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (id && getCurrentNote) {
      setTitle(getCurrentNote.title || "");
      setBody(getCurrentNote.body || "");
    } else {
      setTitle("");
      setBody("");
    }
  }, [id]);

  // cek kondisi enable/disable tombol setiap kali title/body berubah
  useEffect(() => {
    const hasContent = title.trim().length > 0 && body.trim().length > 0;
    if (id && getCurrentNote) {
      // mode edit → cek perbedaan
      const isDifferent =
        title !== (getCurrentNote.title || "") ||
        body !== (getCurrentNote.body || "");

      setIsDisabled(!(hasContent && isDifferent));
    } else {
      // mode add
      setIsDisabled(!hasContent);
    }
  }, [title, body, id, getCurrentNote]);

  return (
    <div className="h-full x-w-xl  my-2">
      <h1 className="text-3xl font-bold mb-10">
        {id ? "Detail Catatan" : "Tambah Catatan"}
      </h1>
      <form
        onSubmit={(e) => onSubmitHandler(e, id)}
        className="block dark:bg-gray-800 max-w-full rounded-md px-3 py-4"
      >
        {/* Input Judul */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            id="floating_title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none dark:text-white dark:border-gray-600 
            dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={onTitleChangeHandler} // kalau controlled input harus ada onChange
            required
            value={title}
          />
          <label
            htmlFor="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Judul
          </label>
        </div>

        {/* Input Deskripsi pakai contentEditable */}
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="floating_deskription"
            className="text-[.7em] text-gray-500 dark:text-gray-400  "
          >
            Deskripsi
          </label>
          <div
            id="floating_deskription"
            name="body"
            contentEditable
            onInput={onInputHandler}
            suppressContentEditableWarning={id ?? false}
            dangerouslySetInnerHTML={{ __html: body }}
            className="block px-0 w-full min-h-[5rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 dark:text-white dark:border-gray-600 
            dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
          ></div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
                `}
            disabled={isDisabled}
          >
            {id ? "Update Catatan" : "Tambah Catatan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCatatanKu;
