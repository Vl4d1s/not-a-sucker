const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const search = require("./routes/API/searchAPI");

app.use(express.json({ extended: false }));
app.use("/api/search", search);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    console.log(`server is runnig on port ${port}`);
  }
});
