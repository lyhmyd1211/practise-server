import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.post("/login", controller.login.login);
  router.get("/session", controller.login.session);
  router.get("/insert", controller.home.insert);
  router.get("/getDate", controller.qx.getDate);
  router.get("/getMapByDate", controller.qx.getMapByDate);
  router.get("/getTableData", controller.qx.getTableData);
};
