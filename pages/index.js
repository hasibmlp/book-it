import React, { useEffect } from "react";
import HotelCards from "../components/HotelCards";
import FormBanner from "../components/BannerForm";
import BannerImg from "../components/BannerImg";
import Banner from "../components/Banner";

import { toast } from "react-toastify";

import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";

import { useDispatch, useSelector } from "react-redux";

import { clearError } from "../redux/actions/roomActions";

// const staticRooms = [
//   {
//     id: "001",
//     title: "Room 1",
//     imgUrl: "img/room.jpeg",
//     para: "Amazing Beautiful Room",
//     price: "$52.00",
//   },
//   {
//     id: "002",
//     title: "Room 2",
//     imgUrl: "img/room2.jpeg",
//     para: "Amazing Averag3 Room",
//     price: "$22.00",
//   },
//   {
//     id: "003",
//     title: "Room 3",
//     imgUrl: "img/room3.jpeg",
//     para: "Super Rooms",
//     price: "$50.00",
//   },
//   {
//     id: "004",
//     title: "Room 4",
//     imgUrl: "img/room5.jpeg",
//     para: "Luxury Room ",
//     price: "$100.00",
//   },
//   {
//     id: "004",
//     title: "Room 4",
//     imgUrl: "img/room5.jpeg",
//     para: "Luxury Room ",
//     price: "$100.00",
//   },
//   {
//     id: "004",
//     title: "Room 4",
//     imgUrl: "img/room5.jpeg",
//     para: "Luxury Room ",
//     price: "$100.00",
//   },
//   {
//     id: "004",
//     title: "Room 4",
//     imgUrl: "img/room5.jpeg",
//     para: "Luxury Room ",
//     price: "$100.00",
//   },
// ];

function Home() {
  const dispatch = useDispatch();

  // const results = useSelector((state) => state.allRooms);
  const { rooms, error } = useSelector((state) => state.allRooms);
  console.log("hhhhhh", rooms);

  useEffect(() => {
    toast.error(error);
    dispatch(clearError);
  }, []);

  console.log("test");
  return (
    <div className="page_wrapper">
      <Banner />
      <HotelCards rooms={rooms} title="Deals" />
      <HotelCards rooms={rooms} title="Featured Rooms" />
    </div>
  );
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getRooms(req));
    }
);
