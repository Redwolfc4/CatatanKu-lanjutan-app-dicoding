import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import MainCatatanKu from "../components/MainCatatanKu";
import NavbarComponent from "../components/NavbarComponent";
import FooterCatatanKu from "../components/FooterCatatanKu";
import FormCatatanKu from "./FormCatatanKu";
import { addNote, editNote, getAllNotes } from "../utils/local-data";
import { useState } from "react";

/**
 * Komponen halaman utama yang menampilkan daftar catatan
 * dan search bar untuk mencari catatan berdasarkan judul atau deskripsi
 * @returns {JSX.Element} Komponen halaman utama
 * @see useSearchParams untuk mengatur nilai searchQuery
 * @see MainCatatanKu untuk menampilkan daftar catatan
 * @see NavbarComponent untuk menampilkan search bar
 * @see FooterCatatanKu untuk menampilkan footer
 */
const TampilanPage = () => {
  const [listCatatan, setListCatatan] = useState(getAllNotes());
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const paramsNow = useLocation();

  /**
   * Mengubah nilai searchQuery dengan nilai yang diinputkan
   * @param {object} event - Event yang di trigger oleh perubahan nilai input
   */
  const onChangeHandler = (event) => {
    setSearchQuery({ search: event.target.value });
  };

  const onDescChangeHandler = (e, data) => {
    console.log(e.target.innerHTML);
    setBody(e.target.innerHTML); // ambil isi HTML dari div
  };

  const onTitleChangeHandler = (e, data) => {
    setTitle(e.target.value); // ambil isi HTML dari div
  }; // kalau controlled input harus ada onChange

  const onSubmitHandler = (event, id) => {
    event.preventDefault();

    if (id) {
      editNote({ id, title: event.target.title.value, body: body });
    } else {
      addNote({
        title: event.target.title.value,
        body: body,
      });
    }

    setListCatatan(getAllNotes());

    // reset form
    event.target.reset();

    // reset form
    setTitle("");
    setBody("");

    // navigate to /
    navigate("/");

    return;
  };

  return (
    <>
      <header className="shadow-xl/25">
        <NavbarComponent
          paramsNow={paramsNow}
          onChangeHandler={onChangeHandler}
          searchQuery={searchQuery.get("search") || ""}
        />
      </header>
      <main className="mx-2 mt-10 flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <MainCatatanKu
                searchQuery={searchQuery.get("search") || ""}
                listCatatan={listCatatan}
                setListCatatan={setListCatatan}
              />
            }
          />
          <Route
            path="/add"
            onClick={() => setCurrentPage("add")}
            element={
              <FormCatatanKu
                setTitle={setTitle}
                setBody={setBody}
                onInputHandler={onDescChangeHandler}
                onSubmitHandler={onSubmitHandler}
                onTitleChangeHandler={onTitleChangeHandler}
                title={title}
                body={body}
              />
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <FormCatatanKu
                setTitle={setTitle}
                onInputHandler={onDescChangeHandler}
                onSubmitHandler={onSubmitHandler}
                onTitleChangeHandler={onTitleChangeHandler}
                body={body}
                title={title}
                setBody={setBody}
              />
            }
          ></Route>
        </Routes>
      </main>
      <footer className="mt-15">
        <FooterCatatanKu />
      </footer>
    </>
  );
};

export default TampilanPage;
