import { useContext } from "react";
import { formContext } from "../context/FormContext";

const NoteForm = () => {
  const {
    handleInputChange,
    createNote,
    updateNote,
    isEditing,
    title,
    message,
  } = useContext(formContext);
  return (
    <div className="flex h-full w-full flex-col items-start justify-center md:w-[500px]">
      <h1 className="mb-3 text-2xl font-bold">
        {isEditing ? "Update my Diary" : "Create my Diary"}
      </h1>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={isEditing ? updateNote : createNote}
      >
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Title:</label>
          <input
            type="text"
            className="h-10 rounded-lg px-2"
            name="title"
            onChange={handleInputChange}
            value={title}
            placeholder="Title"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Message:</label>
          <textarea
            rows={8}
            className="resize-none rounded-lg p-2"
            name="message"
            onChange={handleInputChange}
            value={message}
            placeholder="Body Message"
          />
        </div>
        <button className="rounded-lg bg-neutral-800 py-2 text-white transition-all duration-300 ease-in-out hover:bg-neutral-900">
          {isEditing ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
