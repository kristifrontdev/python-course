require("dotenv").config();
const path = require("path");
const multer = require("multer");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).toLowerCase().replaceAll(" ", "_");
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const allowedTypes = ["application/zip", "application/x-zip-compressed"];
const maxFileSize = 512 * 1024;

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error("Only zip files"), false);
};

const upload = multer({ storage, fileFilter, limits: { fileSize: maxFileSize } });

app.get("/", (req, res) => {
  const file = path.join(__dirname, "public", "form.html");
  res.sendFile(file);
});

app.post("/upload-file", (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send("File is too large");
      }
      return res.status(400).send(err.message);
    }
    res.send("The file was uploaded successfully");
  });
});
