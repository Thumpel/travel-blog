import React from "react";
import Header from "../../Header/Header";
import "./mainStyle/stylescss.scss";
import { NavLink } from "react-router-dom";
export default function Main() {
  return (
    <>
      <main className="main">
        <Header />
        <div className="header">
          <h1>Ireland</h1>
        </div>
        <div className="grid">
          <div className="block">
            <NavLink to="/dublin">
              <img
                src={require("../../images/Main_image/picture1.png")}
                alt="error"
              />
              <p className="line1">Dublin and top attractions</p>
              <p className="line2">Learn all about Dublin here</p>
            </NavLink>
          </div>
          <div className="block">
            <NavLink to="/pubs">
              <img
                src={require("../../images/Main_image/picture2.png")}
                alt="error"
              />
              <p>The best pubs in Dublin</p>
            </NavLink>
          </div>
          <div className="block">
            <NavLink to="/another_cities">
              <img
                src={require("../../images/Main_image/picture3.png")}
                alt="error"
              />
              <p>Other cities in Ireland</p>
            </NavLink>
          </div>
          <div className="block">
            <NavLink to="/history_guiness">
              <img
                src={require("../../images/Main_image/picture4.png")}
                alt="error"
              />
              <p>Histoty of Guiness</p>
            </NavLink>
          </div>
          <div className="block">
            <NavLink to="/histoty_ireland">
              <img
                src={require("../../images/Main_image/picture5.png")}
                alt="error"
              />
              <p>History of Ireland</p>
            </NavLink>
          </div>
          <div className="but">
            <button>Another country</button>
          </div>
        </div>
      </main>
    </>
  );
}
