import React, { useEffect, useState } from "react";
import Login from "./Login";
import logo from "../../public/Images/logo.png";

const Navbar2 = () => {
  const [user, setUser] = useState(null);
  const [bgColor, setBgColor] = useState("");

  // useEffect(() => {
  //   // Retrieve user data from localStorage
  //   const storedUser = JSON.parse(localStorage.getItem("Users"));
  //   if (storedUser) {
  //     setUser(storedUser);

  //     // Generate a random background color
  //     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //     setBgColor(randomColor);
  //   }
  // }, []);

  useEffect(() => {
    try {
      // Retrieve user data from localStorage
      const storedUser = localStorage.getItem("Users");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
  
        // Generate a random background color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      // Handle invalid JSON gracefully
      localStorage.removeItem("Users");
    }
  }, []);
  


  const handleLogout = () => {
    localStorage.removeItem("Users");
    setUser(null);
    window.location.reload();
  };

  // Extract the initial from the user's name or email
  const getUserInitial = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "?"; // Fallback if no name or email is available
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
        {/* bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text */}
        <img src={logo} alt="logo" className="size-14" />
          <a className="btn btn-ghost text-4xl uppercase bg-gradient-to-r from-purple-600
           via-pink-700 to-red-500 font-extrabold  text-transparent bg-clip-text ">Infinite Library</a>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white text-center text-2xl font-bold"
                  style={{ backgroundColor: bgColor }}
                >
                  {getUserInitial()}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                style={{ zIndex: 1000 }}
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <a
              className="btn bg-green-500 text-xl text-center"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
          )}
          <Login setUser={setUser} />
        </div>
      </div>
    </>
  );
};

export default Navbar2;
