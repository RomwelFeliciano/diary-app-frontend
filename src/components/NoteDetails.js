import { useContext } from "react";
import { formContext } from "../context/FormContext";

const NoteDetails = () => {
  const { notes, noteID } = useContext(formContext);

  const details = notes.find((note) => note._id === noteID);

  let date = new Date(details.createdAt);
  let time = date.toLocaleTimeString();

  let templateDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return (
    <div className="flex h-[500px] w-auto flex-col items-start justify-start pt-2 md:w-[800px] md:p-4">
      {details && (
        <div className="flex h-full w-full flex-col items-start justify-start">
          <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-4">
            <div className="flex h-full w-full flex-col gap-2">
              <label className="font-semibold">Title:</label>
              <h2 className="flex h-10 items-center rounded-lg bg-neutral-100 p-4 text-justify">
                {details.title}
              </h2>
            </div>
            <div className="flex h-full w-full flex-col gap-2">
              <label className="font-semibold">Date:</label>
              <div className="flex h-10 items-center rounded-lg bg-neutral-100 p-4 ">
                <h2 className="text-justify">{templateDate}</h2>
                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{time}</span>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-2 pt-2">
            <label className="font-semibold">Message:</label>
            <p className="h-72 w-full overflow-y-scroll rounded-lg bg-neutral-100 p-4 text-justify md:h-full md:overflow-hidden">
              &nbsp;&nbsp;&nbsp;&nbsp;{details.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
