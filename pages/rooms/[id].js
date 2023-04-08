import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Head from "next/head";

import { getRoomDetails } from "../../redux/actions/roomActions";

import { wrapper } from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";

import { clearError } from "../../redux/actions/roomActions";

function Room() {
  const dispatch = useDispatch();
  // const room = useSelector((state) => state.roomDetails);
  const { room, error } = useSelector((state) => state.roomDetails);
  console.log("jdjjdjdjdjdjdjj");
  console.log("this is room data", room);

  useEffect(() => {
    toast.error(error), dispatch(clearError);
  }, []);

  return (
    <>
      <Head>
        <title>{room.name} | bookit</title>
      </Head>

      <div className="room">
        <div className="room__head">
          <h2 className="room__head--title">{room.name}</h2>
          <p>{room.address}</p>
        </div>

        <figure className="room__img">
          <img src="/img/room.jpeg" alt="Room" />
        </figure>

        <div className="room__body">
          <div className="room__body--content">
            <div className="room__body--content__description">
              <h3>Description</h3>
              <p>
                The Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2
                Bedside Tables, a Desk & Chair. The room is furnished with wall
                to wall carpeting, trendy furnishings and a balcony. Our
                ultramodern glass bathroom is equipped with hairdryer,
                magnifying shaving and make up mirror as well as all the
                amenities you could possible need during your stay. A
                Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are
                provided on arrival. Electric current: 220 Volts. Smoking rooms
                & inter-connecting rooms are also available.
              </p>
            </div>
            <div className="room__body--content__features">
              <h3>Features</h3>
              <p>6 Guests</p>
              <p>3 Bed</p>
              <p>Breakfast</p>
              <p>6 Guests</p>
              <p>Internet</p>
              <p>Air Conditioned</p>
              <p>Room Cleaning</p>
            </div>
            <div className="room__body--content__review">
              <a href="">submit your review</a>
              <p>No reviews on this room</p>
            </div>
          </div>

          <div className="room__body--calander">
            <div className="room__body--calander--head">
              <h4>$95 / night</h4>
            </div>
            <div className="room__body--calander--body">
              <p>Pich Check In & Check Out Date</p>
              <div className="room__body--calander--body__calander">
                calander
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      // await store.dispatch(getRoomDetails(req, params.id));
      // console.log("REQUEST: ", req);
      console.log("STORE: ", store.dispatch);
      // console.log("PARAMS: ", params);
    }
);
