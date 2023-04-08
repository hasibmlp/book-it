import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

// Get all rooms
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms`);
    console.log("haseeb", data);

    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log("ERROR OCCURED WHILE DISPATCH FUNCTION");
    // console.log(error);

    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.message,
    });
  }
};

// Room details rooms
export const getRoomDetails = (req, id) => async (dispatch) => {
  console.log(id);
  console.log("sdf");

  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);
    // console.log("haseeb", data);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    // console.log("ERROR OCCURED WHILE DISPATCH FUNCTION");
    // console.log(error);

    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
