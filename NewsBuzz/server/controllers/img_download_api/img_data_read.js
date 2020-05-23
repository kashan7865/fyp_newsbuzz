var http = require("http"); // 1 - Import Node.js core module
const fs = require("fs");
const path = require("path");
const jobs_n = require("../../models/jobs_model");

exports.img_data_update_to_db = async (req, res) => {
  try {
    function readFiles(dir, processFile) {
      // read directory
      fs.readdir(dir, (error, fileNames) => {
        if (error) throw error;

        fileNames.forEach((filename) => {
          // get current file name
          const name = path.parse(filename).name;
          // get current file extension
          const ext = path.parse(filename).ext;

          // get current file path
          const filepath = path.resolve(dir, filename);

          // get information about the file
          fs.stat(filepath, function (error, stat) {
            if (error) throw error;

            // check if the current path is a file or a folder
            const isFile = stat.isFile();

            // exclude folders
            if (isFile) {
              // callback, do something with the file
              processFile(filepath, name, ext, stat);
            }
          });
        });
      });
    }
    readFiles(
      "F:/node work_space/img download api/After_70-_events-work/NewsBuzz/server/img_text_files/",
      (filepath, name, ext, stat) => {
        console.log("file path:", filepath);
        console.log("file name:", name);

        fs.readFile(filepath, (err, data) => {
          if (err) throw err;
          let jobs = JSON.parse(data);
          var data = jobs.img_description;
          console.log(jobs._id);
          jobs_n.update(
            { _id: jobs._id },
            { $set: { description_img_link_data: data } }
          );
          // console.log("file extension:", ext);
          // console.log("file information:", stat);
        });
      }
    );
    return res.json({ message: " all image data save to database" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};
