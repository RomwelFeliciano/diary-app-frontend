import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const URL = process.env.REACT_APP_SERVER_URL;

export const useRegister = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  // Handle Register user
  const register = async (email, password) => {
    setError(null);

    try {
      const response = await fetch(`${URL}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.msg);
      }
      if (response.ok) {
        // Save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // Update the auth context
        dispatch({ type: "LOGIN", payload: json });
        console.log(json);
      }
    } catch (error) {
      setError(error);
    }
  };
  return { register, error };
};
