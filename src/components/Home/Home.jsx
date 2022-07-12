import React from "react";
import BestSeller from "../BestSeller/BestSeller";
import Carouselll from "../carousel/Carouselll";
import ShopByCategories from "../ShopByCategories/ShopByCategories";

const Home = () => {
  return (
    <div>
      <Carouselll />
      <BestSeller />
      <ShopByCategories />
    </div>
  );
};

export default Home;
