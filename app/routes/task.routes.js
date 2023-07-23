const { authJwt } = require("../middlewares");
const controller = require("../controllers/task.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/allusers", [authJwt.verifyToken], controller.allusers);
  app.get("/api/task/all", [authJwt.verifyToken], controller.alltask);
  app.get("/api/task/single/:id", [authJwt.verifyToken], controller.singletask);
  app.post("/api/task/add", [authJwt.verifyToken], controller.addtask);
  app.put("/api/task/update/:id", [authJwt.verifyToken], controller.updatetask);
  app.delete("/api/task/delete/:id", [authJwt.verifyToken], controller.deletetask);

};
