import Room from "../model/room";
import ApiFeatures from "../utils/apiFeatures";

const allRooms = async (req, res) => {
  const apiFeatures = new ApiFeatures(Room.find(), req.query);

  apiFeatures.search().filter();

  const rooms = await apiFeatures.query;

  try {
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

// new room adding
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      count: room.length,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error.message,
    });
  }
};

const getSingleRoom = async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    res.status(400).json({
      success: false,
      error: "room not found by this id",
    });
  }
  res.status(200).json({
    success: true,
    room,
  });
};

const updateRoom = async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(400).json({
      success: false,
      error: "room not found by this id",
    });
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    newValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
};

const deletRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(400).json({
        success: false,
        error: "room not found by this id",
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "room deleted succesfully",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deletRoom };
