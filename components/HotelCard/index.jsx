import React from "react";
import s from "./HotelCard.module.css";
import Link from "next/link";
import Image from "next/image";

function HotelCard({ room }) {
  return (
    <div className={s.getRoomCart}>
      <figure className={s.getRoomCart__img}>
        <Image
          src={room.images[0].url}
          alt="Room Photo"
          height={170}
          width={100}
        />
      </figure>
      <div className={s.getRoomCart__body}>
        <h2 className={s.getRoomCart__title}>{room.name}</h2>
        {/* <p className={s.getRoomCart__para}>{room.description}</p> */}
        <h3 className={s.getRoomCart__price}>{room.price}Rs / Night</h3>

        <div className={s.rating_outer}>
          <div className={s.rating_inner}></div>
        </div>

        <Link href={`/rooms/${room._id}`} className={s.getRoomCart__button}>
          Search
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
