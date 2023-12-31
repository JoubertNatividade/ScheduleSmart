import { Router } from "express";
import { ScheduleController } from "./controllers/ScheduleController";
import { AuthMiddleware } from "../../middleware/AuthMiddleware";

class ScheduleRoutes {

  private router : Router
  private scheduleController : ScheduleController
  private authMiddleware : AuthMiddleware

  constructor () {
    this.router = Router()
    this.scheduleController = new ScheduleController()
    this.authMiddleware = new AuthMiddleware()
  }

  getRoutes() {
    this.router.get(
      '/', this.authMiddleware.auth.bind(this.authMiddleware),
      this.scheduleController.list.bind(this.scheduleController)
    )
    this.router.post(
      '/',this.authMiddleware.auth.bind(this.authMiddleware), 
      this.scheduleController.create.bind(this.scheduleController)
    )
    this.router.put(
      '/:id', this.authMiddleware.auth.bind(this.authMiddleware), 
      this.scheduleController.update.bind(this.scheduleController)
    )

    this.router.delete(
      '/:id', this.authMiddleware.auth.bind(this.authMiddleware),
      this.scheduleController.delete.bind(this.scheduleController)
    )
  
    return this.router
  }
}

export {ScheduleRoutes}