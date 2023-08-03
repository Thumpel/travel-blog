import React, { useState } from "react";
import "./styleHeader.scss";
import { NavLink } from "react-router-dom";
import FormModal from "../Components/Form/FormModal";
export default function Header() {
  const [visibleContact, setVisibleContact] = useState(false);
  const [visibleAboutUs, setVisibleAboutUs] = useState(false);
  const [modal, setModal] = useState(false);
  const openInfoContact = () => {
    setVisibleContact(!visibleContact);
  };
  const openInfoAboutUS = () => {
    setVisibleAboutUs(!visibleAboutUs);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const sizeIcon = {
    width: "55px",
    height: "55px",
  };
  const button_cursor = {
    cursor: "pointer",
  };
  const styleDropDownInfoContact = {
    background: "white",
    marginTop: "50px",
    marginRight: "800px",
    fontSize: "8px",
    width: "300px",
    borderRadius: "0px 120px 120px 120px",
  };
  const styleDropDownInfoAboutUS = {
    background: "white",
    marginTop: "50px",
    marginRight: "100px",
    fontSize: "18px",
    width: "200px",
    height: "110px",
    borderRadius: "30px 0px 30px 30px",
  };
  return (
    <>
      <header className="hd_image">
        <div className="info">
          <div className="social_network">
            <img
              src={require("../images/Header_image/telegram.png")}
              alt="error"
              className="teleg"
              style={sizeIcon}
            />
            <img
              src={require("../images/Header_image/instagram.png")}
              alt=""
              className="inst"
              style={sizeIcon}
            />
          </div>
          <div className="email">
            {/* <NavLink to="/form"> */}
            <button
              style={button_cursor}
              className="but_email"
              onClick={openModal}
            >
              <p>thumpel81@gmail.com</p>
            </button>
            {modal && (
              <FormModal
                onClose={closeModal}
                active={modal}
                setActive={setModal}
              />
            )}
            {/* <FormModal active={modal} setActive={setModal} /> */}
            {/* </NavLink> */}
          </div>
        </div>
        <div className="logo">
          <div>
            <h1>thumpel Travel</h1>
          </div>
          <div>
            <p>Here all about Ireland and another coutries</p>
          </div>
        </div>
      </header>
      <div className="panel">
        <nav className="links">
          <li onClick={openInfoContact}>Contacts</li>
          {visibleContact && (
            <ul
              className="DropDownInfoContact"
              style={styleDropDownInfoContact}
            >
              <li>Number phone:+353857814569</li>
              <li>Telegram:@thumpel</li>
            </ul>
          )}
          <NavLink to="/trip">
            <li>Trips</li>
          </NavLink>
          <li onClick={openInfoAboutUS}>About us</li>
          {visibleAboutUs && (
            <p
              className="DropDownInfoAboutUS"
              style={styleDropDownInfoAboutUS}
            >
              This site is about Ireland. <br />
              Here you will learn a lot about this <br />
              country and make a route <br />
            </p>
          )}
        </nav>
      </div>
    </>
  );
}
