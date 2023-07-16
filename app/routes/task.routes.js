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

  app.get("/api/allusers", controller.allusers);
  app.get("/api/task/all", controller.alltask);
  app.get("/api/task/single/:id", controller.singletask);
  app.post("/api/task/add", controller.addtask);
  app.put("/api/task/update/:id", controller.updatetask);
  app.delete("/api/task/delete/:id", controller.deletetask);

};
