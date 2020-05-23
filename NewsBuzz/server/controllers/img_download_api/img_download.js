const express = require("express");
// const router = express.Router();
const jobs_news = require("../../models/jobs_model");

var fs = require("fs");
var request = require("request");

exports.readJobs = async (req, res) => {
  try {
    const jobs_R = await jobs_news
      .find()


    let i = 0;
    console.log(jobs_R);
    while (jobs_R[i] != null) {
      img_name = jobs_R[i]._id + ".jpg";

      console.log(img_name);
      img_link = jobs_R[i].description_img_link;
      // ====================================

      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          console.log("content-type:", res.headers["content-type"]);
          console.log("content-length:", res.headers["content-length"]);

          request(uri)
            .pipe(
              fs.createWriteStream(
                "./img_to_be_OCR//" +
                filename
              )
            )
            .on("close", callback);
        });
      };

      download(img_link, img_name, function () {
        console.log("done");
      });
      // ===================================
      i = i + 1;
    } return res.json({ message: " all images are downloaded" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }

};
