const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getLocations,
  getOneLocation,
  addLocation,
  deleteLocation,
  updateLocation,
  deleteAllLocations,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all locations
app.get("/locations", getLocations);

// GET a single location
app.get("/locations/:id", getOneLocation);

// POST a new location
app.post("/addLocation", addLocation);

// DELETE a delete location
app.delete("/locations/:id", deleteLocation);

// Update location using PUT
app.put("/locations/:id", updateLocation);

// DELETE all location
app.delete("/locations", deleteAllLocations);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});