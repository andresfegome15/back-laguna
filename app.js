const express = require("express");
const cors = require("cors");

// init express
const app = express();

// util json
app.use(express.json());

// middleware
const { ErrorHandler } = require("./middleware/handlerError.middleware");

// utils
const { GlobalError } = require("./utils/ErrorGlobal.utils");

// Router
const { userRouter } = require("./router/user.router");
const { banerInfoRouter } = require("./router/banerInfo.router");
const { contactRouter } = require("./router/contact.router");
const { reseñaRouter } = require("./router/reseña.router");
const { respuestaRouter } = require("./router/respuesta.router");
const { lagunasRouter } = require("./router/lagunastravel.router");
const { servicioRouter } = require("./router/servicio.router");
const { nosotrosRouter } = require("./router/nosotros.router");
const { transporteRouter } = require("./router/transporte.router");
const { MultimediaRouter } = require("./router/multimedia.router");
const { ReservaRouter } = require("./router/reserva.router");

// Endpoints
app.use("/api/v1/users", userRouter);
app.use("/api/v1/banerInfo", banerInfoRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/comentario", reseñaRouter);
app.use("/api/v1/respuesta", respuestaRouter);
app.use("/api/v1/lagunas", lagunasRouter);
app.use("/api/v1/servicio", servicioRouter);
app.use("/api/v1/nosotros", nosotrosRouter);
app.use("/api/v1/transporte", transporteRouter);
app.use("/api/v1/multimedia", MultimediaRouter);
app.use("/api/v1/reserva", ReservaRouter);

app.use(cors());

// Endpoints no found
app.all("*", (req, res, next) => {
  next(
    new GlobalError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(ErrorHandler);
module.exports = { app };
