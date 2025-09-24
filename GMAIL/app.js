const express = require("express");
const app = express();

app.use(express.json()); // 💥 This is what allows Express to read JSON bodies

const emailRoutes = require("./routes/emailRoutes");
app.use("/", emailRoutes); // Register your routes

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
