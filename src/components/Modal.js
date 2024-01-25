import { useContext } from "react";
import NoteDetails from "./NoteDetails";
import NoteForm from "./NoteForm";
import { formContext } from "../context/FormContext";

const Modal = () => {
  const { showForm, handleCloseForm, isCreating, isViewing, isEditing } =
    useContext(formContext);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseForm();
    }
  };
  return (
    <>
      {showForm && (
        <div
          className={`fixed top-0 z-0 flex h-full w-full items-center justify-center bg-neutral-700 bg-opacity-80 p-4 md:p-0 ${showForm ? "flex" : "hidden"}`}
          onClick={handleOverlayClick}
        >
          <div className="relative flex w-full flex-col rounded-lg bg-green-300 p-4 md:w-auto">
            <button
              className="absolute right-3 top-3 z-10 flex h-5 w-5 items-center justify-center rounded text-3xl"
              onClick={handleCloseForm}
            >
              &times;
            </button>
            <div className="-mt-2 w-full">
              {/* Your modal content goes here */}

              {(isCreating || isEditing) && <NoteForm />}
              {isViewing && <NoteDetails />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
