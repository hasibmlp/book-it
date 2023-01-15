import React from "react";
import BannerForm from "../BannerForm";
import BannerImg from "../BannerImg";
import s from "./Banner.module.css";

function Banner() {
  return (
    <div className={s.banner}>
      <BannerImg />
      <BannerForm
        title="Find Your Fitted Room"
        para="Enter your data to see the latest price and deals"
      />
    </div>
  );
}

export default Banner;
