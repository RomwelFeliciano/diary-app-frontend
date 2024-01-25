import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-start px-4 py-32 md:px-20">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
