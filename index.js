// import "./localEnv.js";
// import cors from "cors";

import express from "express"; // connecting BD
const app = express();

// this dev shows the log when checking the router
// app.use(morgan("dev")); // logging routes
// app.use(express.json());
// app.use(cors());

const PORT = process.env.PORT || 3600;

//main foot route
app.get("/", (req, res) => {
  res.send("Hello World From a beautiful garden!");
});

app.listen(PORT, () => {
  console.log(`Server at port: ${PORT}`);
});
