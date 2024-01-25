import { useContext } from "react";
import { noteContext } from "../context/NoteContext";
import NoteItem from "./NoteItem";

const NoteContainer = () => {
  const { isLoading, notes } = useContext(noteContext);

  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
      {!isLoading && notes.length === 0 ? (
        <p>Notes are empty!</p>
      ) : (
        <>
          {notes.map((note, index) => {
            return <NoteItem key={index} note={note} />;
          })}
        </>
      )}
    </div>
  );
};

export default NoteContainer;
