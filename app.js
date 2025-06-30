import e from "express";
import router from "./routers/posts.js";

const app = e();
const port = 3000;

app.use(e.static("imgs"));
app.use("/posts", router);

app.get("/", (req, res) => {
  res.send("Express Blog Routing");
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
