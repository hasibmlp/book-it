import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  getSingleRoom,
  updateRoom,
  deletRoom,
} from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deletRoom);

export default handler;
