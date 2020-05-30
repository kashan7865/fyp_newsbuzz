const event = require("../../models/saveevent");

exports.updateEventStatus = async (req, res) => {
  console.log("----------");
  console.log(req.body.id);
  // eventObj.status = "notvarified";
  try {
    var objForUpdate = {};
    objForUpdate.status = "approved";
    await event.findOneAndUpdate(
      {
        _id: req.body.id
      },
      objForUpdate,
      function (error, results) {
        if (error) {
          return next(error);
        }
        res.json({
          status: 1,
          message: "Admin Updated Successfully",
          object: results
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// return res.json(null);

// exports.getscholar = (req, res) => {};
