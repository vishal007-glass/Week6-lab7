const Location = require("./model");

// get all locations
const getLocations = async (req, res) => {
  const locations = await Location.find({});
  res.status(200).json(locations);
};

// Add one locations
const addLocation = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const newLocation = new Location({ name, address, latitude, longitude });
  await newLocation.save();
  res.status(201).json(newLocation);
};

// Delete Location by ID
const deleteLocation = async (req, res) => {
  const { id } = req.params;

  const item = await Location.findByIdAndDelete({ _id: id });
  if (!item) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json({ message: "Location deleted successfully" });
};

// Delete all locations
const deleteAllLocations = async (req, res) => {
  const result = await Location.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} locations successfully` });
};

// Get location by ID
const getOneLocation = async (req, res) => {
  const { id } = req.params;

  const location = await Location.findById(id);
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.status(200).json(location);
};

// Update Goal by ID
const updateLocation = async (req, res) => {
  const { id } = req.params;
  const updatedLocation = req.body;
  const item = await Location.findOneAndUpdate({ _id: id }, updatedLocation);
  if (!item) {
    return res.status(404).json({ message: "location not found" });
  }
  res.status(200).json(item);
};



module.exports = {
  getLocations,
  getOneLocation,
  addLocation,
  updateLocation,
  deleteLocation,
  deleteAllLocations
};