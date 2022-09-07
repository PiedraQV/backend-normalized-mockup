const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = require("./config/config.json");

const http = require("http").Server(app);
var io = require("socket.io")(http);

app.set("io", io);

app.use(express.static("public"));

const messagesRouter = require("./routes/messages.routes");
app.use("/mensajes", messagesRouter);

io.on("connect", (socket) => {
  console.log("usuario conectado");
});

const PORT = 8080;

http.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});

http.on("error", (error) => {
  console.log("error en el servidor:", error);
});
