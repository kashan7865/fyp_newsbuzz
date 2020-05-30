const event = require("../../models/saveevent");

exports.updateEventStatus = async (req, res) => {
  console.log("----------");
  console.log(req.body);
  // eventObj.status = "   ";
  try {
    var myquery = { "_id": req.body.id };
    var newvalues = { $set: { "status": req.body.status_update } };

    // var objForUpdate = {};
    // objForUpdate.status = req.body.status_update;
    await event.updateOne(myquery, newvalues, function (err, result) {
      if (err) throw err;
      console.log(result)



    });
    // console.log(results)
    // return res.json({
    //   status: 1,
    //   message: "event Updated Successfully",
    //   object: results
    // });
    // }
    // );
  } catch (error) {
    console.log(error);
  }
};

// return res.json(null);

// exports.getscholar = (req, res) => {};
