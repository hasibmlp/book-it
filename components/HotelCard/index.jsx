import React from "react";
import s from "./HotelCard.module.css";
import Link from "next/link";

function HotelCard({ room }) {
  return (
    <div className={s.getRoomCart}>
      <figure className={s.getRoomCart__img}>
        <img src={room.imgUrl} alt="Room Photo" />
      </figure>
      <div className={s.getRoomCart__body}>
        <h2 className={s.getRoomCart__title}>{room.title}</h2>
        <p className={s.getRoomCart__para}>{room.para}</p>
        <h3 className={s.getRoomCart__price}>{room.price}</h3>

        <Link href={`/rooms/${room.id}`} className={s.getRoomCart__button}>
          Search
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
