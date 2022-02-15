const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");
const InteractionController = require("./controllers/InteractionController");

routes
  // users
  .get("/users", UserController.index)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete)
  // movies
  .get("/movies", MovieController.index)
  .post("/movies", MovieController.create)
  .put("/movies/:id", MovieController.update)
  .delete("/movies/:id", MovieController.delete)
  // interactions
  .get("/interactions", InteractionController.index)
  .post("/interactions", InteractionController.create)
  .put("/interactions/:id", InteractionController.update)
  .delete("/interactions/:id", InteractionController.delete);

module.exports = routes;
