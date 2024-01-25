import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 z-10 flex h-24 w-full flex-col items-center justify-center gap-2 bg-neutral-900 px-5 text-white md:flex-row md:justify-between md:gap-0 md:px-20">
      <Link to="/">
        <h2 className="text-xl font-bold md:text-2xl">My Diary</h2>
      </Link>
      <nav className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-center md:gap-10">
        {user && (
          <>
            <h2 className="text-base md:text-xl">
              Hello,
              <span className="font-bold text-green-400"> {user.email}</span>
            </h2>
            <button
              className="rounded-lg border-2 border-green-400 px-4 py-1 text-base transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black md:text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
        {!user && (
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-start">
            <Link to={"/login"}>
              <h2 className="text-xl font-semibold transition-all duration-200 ease-in-out hover:text-green-400 hover:underline hover:underline-offset-8">
                Login
              </h2>
            </Link>
            <Link to={"/register"}>
              {" "}
              <h2 className="text-xl font-semibold transition-all duration-200 ease-in-out hover:text-green-400 hover:underline hover:underline-offset-8">
                Register
              </h2>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
