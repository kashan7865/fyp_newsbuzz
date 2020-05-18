const express = require("express");
// const router = express.Router();
const jobs_news = require("../../models/jobs_model");

var fs = require("fs");
var request = require("request");

exports.readJobs = async (req, res) => {
  try {
    const jobs_R = await jobs_news
      .find()
      .select("description_img_link")
      .sort({ _id: -1 });
    let i = 0;

    while (jobs_R) {
      img_name = "jobs" + i + ".jpeg";

      console.log(img_name);
      img_link = jobs_R[i].description_img_link;
      // ====================================

      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          console.log("content-type:", res.headers["content-type"]);
          console.log("content-length:", res.headers["content-length"]);

          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };

      download(img_link, img_name, function () {
        console.log("done");
      });
      // ===================================
      i = i + 1;
    }
    // console.log(jobs_R[0].description_img_link);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};
