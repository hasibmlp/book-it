import React from "react";
import HotelCard from "../HotelCard";
import s from "./HotelCards.module.css";

function HotelCards({ rooms, title }) {
  return (
    <section className={s.hotel_card_grid_wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.hotel_card_grid}>
        {rooms.map((item) => {
          return <HotelCard room={item} />;
        })}
      </div>
    </section>
  );
}

export default HotelCards;
