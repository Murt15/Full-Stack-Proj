const Data = require("../models/database");
exports.getData = async (req, res) => {
  // console.log(req.headers.heading);
  // console.log(req.headers.tab);
  const heading = req.headers.heading;
  const tab = req.headers.tab;
  const response = await Data.find({ Module: heading, Tab: tab });
  res.json(response);
};

exports.searchData = async (req, res) => {
  const heading = req.headers.heading;
  const response = await Data.find({ heading: heading });
  res.json(response);
};
