import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  // router.get('/', controller.home.index);
  router.post("/login", controller.login.login);
  router.get("/session", controller.login.session);
  router.get("/find", controller.home.index);
  router.get("/insert", controller.home.insert);
  router.get("/getDate", controller.qx.getDate);
  router.get("/getMapByDate", controller.qx.getMapByDate);
};
