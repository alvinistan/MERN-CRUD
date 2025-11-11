import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = () => {
    // Redirect to backend Google auth route
    window.location.href = "http://localhost:5000/auth/google";
  };

  React.useEffect(() => {
    fetch("http://localhost:5000/me", {
      method: "GET",
      credentials: "include", // important for cookies
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          // means we got a valid user object
          setUser(data);
        }
      })
      .catch(() => {
        // not logged in or error – just ignore
      });
  }, []);

  return (
    <div className="w-full flex justify-between items-center h-15 bg-gray-200 shadow px-6">
      {/* Logo */}
      <div className="w-[10%] h-full flex items-center">
        <h1 className="text-green-500 font-bold text-2xl">
          LEE<span className="text-black">NAS</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="max-h-full">
        <ul className="w-full flex gap-6 list-none">
          <li className="cursor-pointer hover:text-green-600">HOME</li>
          <li className="cursor-pointer hover:text-green-600">ABOUT</li>
          <li className="cursor-pointer hover:text-green-600">CONTACT</li>
        </ul>
      </div>

      {/* Right side: user or login icon */}
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.picture}
              alt="avatar"
              className="w-8 h-8 rounded-full "
            />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="text-2xl flex items-center hover:text-green-600 cursor-pointer"
          >
            <FaRegCircleUser />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
