const { Reserva } = require("./reservas.models");
const { Reseñas } = require("./reseñas.models");
const { Respuesta } = require("./respuestas.models");
const { Servicio } = require("./servicio.models");

const relationModels = () => {
  Servicio.hasMany(Reserva, { foreignKey: "servicioId" });
  Reserva.belongsTo(Servicio);

  Reseñas.hasMany(Respuesta, { foreignKey: "id" });
  Respuesta.belongsTo(Reseñas);
};

module.exports = { relationModels };
