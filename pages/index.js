import HotelCards from "../components/HotelCards";
import FormBanner from "../components/BannerForm";
import BannerImg from "../components/BannerImg";
import Banner from "../components/Banner";

const rooms = [
  {
    id: "001",
    title: "Room 1",
    imgUrl: "img/room.jpeg",
    para: "Amazing Beautiful Room",
    price: "$52.00",
  },
  {
    id: "002",
    title: "Room 2",
    imgUrl: "img/room2.jpeg",
    para: "Amazing Averag3 Room",
    price: "$22.00",
  },
  {
    id: "003",
    title: "Room 3",
    imgUrl: "img/room3.jpeg",
    para: "Super Rooms",
    price: "$50.00",
  },
  {
    id: "004",
    title: "Room 4",
    imgUrl: "img/room5.jpeg",
    para: "Luxury Room ",
    price: "$100.00",
  },
];

function Home() {
  return (
    <div className="page_wrapper">
      <Banner />
      <HotelCards rooms={rooms} title="Deals" />
      <HotelCards rooms={rooms} title="Featured Rooms" />
    </div>
  );
}

export default Home;
