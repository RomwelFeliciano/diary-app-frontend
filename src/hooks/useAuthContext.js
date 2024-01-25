import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// Returning AuthContext but checking if it is inside the provider

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
