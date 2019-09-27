import { OK, BAD_REQUEST } from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { Logger } from "@overnightjs/logger";

const { NODE_ENV } = process.env;

@Controller("api/photos")
export class PhotosController {
  // @Get(":id")
  // @Middleware([middleware1, middleware2])
  // private get(req: Request, res: Response) {
  //   Logger.Info(req.params.id);
  //   return res.status(OK).json({
  //     message: "get_called",
  //   });
  // }

  @Get("")
  private getAll(req: Request, res: Response) {
    Logger.Info(req.params, true);
    return res.status(OK).json({
      message: "get_all_called!",
      env: NODE_ENV,
    });
  }

  // @Get("practice/async")
  // private async getWithAsync(req: Request, res: Response) {
  //   try {
  //     const asyncMsg = await this.asyncMethod(req);
  //     return res.status(OK).json({
  //       message: asyncMsg,
  //     });
  //   } catch (err) {
  //     Logger.Err(err, true);
  //     return res.status(BAD_REQUEST).json({
  //       error: err.message,
  //     });
  //   }
  // }

  // private asyncMethod(req: Request): Promise<string> {
  //   return new Promise(resolve => {
  //     resolve(req.originalUrl + " called");
  //   });
  // }
}
