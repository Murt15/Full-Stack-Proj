//function for getting data
const Data = require("../models/database");
exports.getData = async (req, res) => {
  try {
    const heading = req.headers.heading;

    const tab = req.headers.tab;

    //finding the appropriate data with respect to the module and tab number
    const response = await Data.find({ Module: heading, Tab: tab });
    //sending the response to client
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};
//function for searching data
exports.searchData = async (req, res) => {
  try {
    const heading = req.headers.heading;
    //finding data with respect to heading
    const response = await Data.find({ heading: heading });
    //sending response to client
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json(error);
  }
};
