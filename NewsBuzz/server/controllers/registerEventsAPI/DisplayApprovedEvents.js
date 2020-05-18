const registerEvent_model = require("../../models/saveevent");
// const bodyparser = require("body-parser");

exports.Search_registerEvent = async (req, res) => {
  try {
    console.log(req.body.current)
    location = req.body.current
    const eventApproved_ = await registerEvent_model
      .find({ status: "approved",

     city: {$regex: new RegExp('.*' + locaation.toLowerCase()+'.*', 'i')},
     city : {$regex: new RegExp('.*' + location.toUpperCase()+'.*','i')},is_active:true
      //   (status: "approved") 
      // && (city: "location")
     })
      .sort({ _id: -1 });
    res.json(eventApproved_);
  } 
  catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: "events displayed" });
};

// exports.getscholar = (req, res) => {};
