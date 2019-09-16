import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { PhotosController } from "./controllers/photos.controller";

export class PhotoalbumServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === "development"); // setting showLogs to true
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp("Server listening on port: " + port);
    });
  }

  private setupControllers(): void {
    const photosController = new PhotosController();
    // const dbConnObj = new SomeDbConnClass("credentials");
    // signupController.setDbConn(dbConnObj);
    // userController.setDbConn(dbConnObj);
    // super.addControllers() must be called, and can be passed a single controller or an array of
    // controllers. Optional router object can also be passed as second argument.
    super.addControllers([photosController] /*, optional router here*/);
  }
}
