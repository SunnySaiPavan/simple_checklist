const express = require("express");
const cors = require("cors");
const checklistRoutes = require("./routes/checklist");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", checklistRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



