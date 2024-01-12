const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDatabase = require("./src/database/connect.mongodb");
connectDatabase();
const Room = require("./src/models/room.model");
// Import routes
const superAdminRoutes = require("./src/routes/superAdminRoutes");
const roomRoutes = require("./src/routes/roomRoutes");
const hotelRoutes = require("./src/routes/hotelRoutes");
const reservationRoutes = require("./src/routes/reservationRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const checkUserAuth = require("./src/middlewares/auth");
const forgetPasswordRoute = require("./src/routes/forgetPasswordRoute");
const contactRoutes = require("./src/routes/contactRoutes");
const Hotel = require("./src/models/hotel.model")

const {
  searchHotels,
  getTopRatedHotels,
} = require("./src/controllers/filterController");

const app = express();
app.use(express.static("public"));
app.use(cors());

const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("App is working");
});
app.use("/hotels", hotelRoutes);
app.use("/rooms", checkUserAuth, roomRoutes);
app.use("/reservation", reservationRoutes);
app.use("/filter", searchHotels, getTopRatedHotels);
app.use("/review", reviewRoutes);
app.use("/password", forgetPasswordRoute);
// router.use('/loggeduser', checkUserAuth);
app.use("/superAdmin", superAdminRoutes);
app.use("/contact", contactRoutes);

//get rooms by hotel id

app.get('/', async (req, res) =>{
  return res.status(200).json({message: "Welcome to Duksen.com"})
})
app.get("/rooms-by-hotel/:id", async (req, res) => {
  try {
    const rooms = await Room.find({ hotelId: req.params.id });
    if (!rooms) {
      return res.status(404).json({ error: "Room not found" });
    }
    return res.status(200).json({ status: 200, rooms: rooms });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
