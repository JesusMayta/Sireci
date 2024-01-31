import React from "react";
import ReactDOM from "react-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* ESTRUCTURACION frontend = Jesus, */}
    {/* maketas o vistas = Hugo=login, Diego:registro y Emir:home */}

    {/* ESTRUCTURACION backend = Bravo, Samuel,   */}

    <Login />
    {/* <Register />
    <Profile /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
