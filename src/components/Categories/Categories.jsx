import React from "react";
import "./Categories.css";
import imgs from "./img/while.svg";
import optika from "./img/optika.svg";
import { useNavigate } from "react-router-dom";
import { categories } from "../../helpers/categorie";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories_wrapper">
      <div className="categories_inner">
        <h2>Категории</h2>
        <div className="categories__card-wrapper">
          {categories.map((category) => (
            <div className="categories_card-item">
              <img
                onClick={() => navigate(`${category.link}`)}
                className="categories_card-img"
                src={category.img}
                alt=""
              />
              <h3 className="category-item">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
