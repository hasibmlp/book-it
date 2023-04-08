import React from "react";
import HotelCard from "../HotelCard";
import s from "./HotelCards.module.css";

function HotelCards({ rooms, title }) {
  return (
    <section className={s.hotel_card_grid_wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.hotel_card_grid}>
        {rooms.map((room, index) => {
          return <HotelCard key={index} room={room} />;
        })}
      </div>
    </section>
  );
}

export default HotelCards;
