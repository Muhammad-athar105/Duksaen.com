const Hotel = require("../models/hotel.model");
const Review = require("../models/review.model");
const Room = require("../models/room.model");

// Get top-rated hotels
const getTopRatedHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().sort({ rating: -1 }).limit(10);
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const searchHotels = async (req, res) => {
  try {
    const {
      hotelName,
      hotelAddress,
      minPrice,
      maxPrice,
      roomType,
      amenities,
      sector,
      checkIn,
      checkOut,
      persons,
      rooms,
    } = req.query;
    const query = {};

    if (hotelName) {
      query.hotelName = { $regex: hotelName, $options: "i" };
    }

    if (hotelAddress) {
      query.hotelAddress = { $regex: hotelAddress, $options: "i" };
    }

    if (minPrice && maxPrice) {
      query.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    } else if (minPrice) {
      query.price = { $gte: parseInt(minPrice) };
    } else if (maxPrice) {
      query.price = { $lte: parseInt(maxPrice) };
    }

    if (roomType) {
      query["rooms.roomType"] = { $regex: roomType, $options: "i" };
    }

    if (amenities) {
      query["rooms.amenities"] = { $regex: amenities, $options: "i" };
    }

    if (sector) {
      query.sector = { $regex: sector, $options: "i" };
    }

    // Check-in and Check-out date filtering
    if (checkIn && checkOut) {
      query["rooms.availableDates.checkIn"] = { $lte: new Date(checkOut) };
      query["rooms.availableDates.checkOut"] = { $gte: new Date(checkIn) };
    }

    // Number of persons filtering
    if (persons) {
      query["rooms.capacity.persons"] = { $gte: parseInt(persons) };
    }

    // Number of rooms filtering
    if (rooms) {
      query["rooms.quantity"] = { $gte: parseInt(rooms) };
    }

    const hotels = await Hotel.find(query);
    // const roo = await Room.find(query);

    if (hotels.length === 0) {
      return res.status(404).json({
        message:
          "Sorry, we cannot find any hotels matching your search criteria.",
      });
    }

    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getTopRatedHotels, searchHotels };
