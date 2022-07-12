import React, { useState } from "react";
import "./Header.css";
import image1 from "../Images/logo1.svg";
import image2 from "../Images/search.png";
import image3 from "../Images/menu.png";
import image4 from "../Images/account.png";
import image5 from "../Images/close.png";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "BMW",
    id: 1,
    link: "/bmw",
  },
  {
    name: "Mersedes - Benz",
    id: 2,
    link: "/mersedes",
  },
  {
    name: "Lexus",
    id: 3,
    link: "/Lexus",
  },
  {
    name: "Toyota",
    id: 4,
    link: "/toyota",
  },
  {
    name: "Mazda",
    id: 5,
    link: "/Mazda",
  },
];

const Header = () => {
  const [features, setFeatures] = useState(false);
  const [all, setAll] = useState(false);
  const [active, setActive] = useState("header2-block4");
  const navToggle = () => {
    active === "header2-block4"
      ? setActive("header2-block4 nav-active")
      : setActive("header2-block4");
  };
  return (
    <>
      <div className="header">
        <div className="container-header">
          <div className="header1">
            <div className="header1-block1">
              <Link to="/">
                <img className="header-logo" src={image1} alt="" />
              </Link>
            </div>
            <div className="header1-block2">
              <input
                className="header-input"
                type="text"
                placeholder="Keyword here..."
              />
              <img className="header-search-img" src={image2} alt="" />
            </div>
          </div>
          <div className="header2">
            <div
              onClick={() => {
                setAll(!all);
                setFeatures(false);
              }}
              className="header2-block1"
            >
              <h5 className="header-h5">ВСЕ КАТЕГОРИИ</h5>
              <img className="burger" src={image3} alt="" />
              {all ? (
                <div className="all">
                  <span className="all-link">Lighting</span>
                  <span className="all-link">Oil Fluids</span>
                  <span className="all-link">Smart Devices</span>
                  <span className="all-link">Paintworks</span>
                  <span className="all-link">Replacement Parts</span>
                  <span className="all-link">Wheels & Tires</span>
                  <span className="all-link">Car Parts</span>
                  <span className="all-link">Tool</span>
                  <span className="all-link">Baby Car Seats</span>
                  <span className="all-link">Motorbike Seats</span>
                </div>
              ) : null}
            </div>

            <div className="header2-block2">
              <div className="header-media">
                <input
                  className="header-input2"
                  type="text"
                  placeholder="Keyword here..."
                />
                <img className="header-search-img2 " src={image2} alt="" />
                <img
                  onClick={navToggle}
                  className="burger-block2"
                  src={image3}
                  alt=""
                />
              </div>
              <div className={active}>
                <img
                  onClick={navToggle}
                  src={image5}
                  alt=""
                  className="close"
                />
                <Link to="/">
                  <a className="header2-a">Главная</a>
                </Link>
                <a
                  onClick={() => {
                    setFeatures(!features);
                    setAll(false);
                  }}
                  className="header2-a"
                >
                  Марки
                </a>
                <Link to="/about">
                  <a className="header2-a">О нас</a>
                </Link>
                <a className="header2-a">КАТЕГОРИИ</a>
                <a className="header2-a">Аксессуары</a>
                <Link to="/contacts">
                  <a className="header2-a">Контакты</a>
                </Link>
              </div>
              {features ? (
                <div className="features">
                  <div className="features-block1">
                    {brands.map((item) => (
                      <Link to={item.link}>
                        <h4
                          onClick={() => setFeatures(false)}
                          className="features-h4"
                        >
                          {item.name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="border__lines-12"></div>
    </>
  );
};

export default Header;
