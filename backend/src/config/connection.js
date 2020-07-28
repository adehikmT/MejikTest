const mongoose = require("mongoose");
try {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      error ? console.error() : console.log("database connected...");
    }
  );
} catch (err) {
  console.log(err);
}
module.exports = mongoose;
