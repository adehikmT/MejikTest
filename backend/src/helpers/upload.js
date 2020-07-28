const multer = require("multer"),
  path = require("path"),
  storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, __dirname + "../../../public/images");
    },
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}` + path.extname(file.originalname)
      );
    },
  }),
  upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      fileTypeCheck(file, cb);
    },
  }).single("image"),
  fileTypeCheck = (file, cb) => {
    console.log(file);
    const types = /jpeg|jpg|png|svg/,
      extname = types.test(path.extname(file.originalname).toLowerCase()),
      mimetype = types.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: file must be image");
    }
  };

module.exports = upload;
