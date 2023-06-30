import { Router } from "express"
import { UsersControllers } from "./controllers/UserControllers";
import { upload } from "../../config/multer";
import { AuthMiddleware } from "../../middleware/AuthMiddleware";


class UsersRoutes{
  private router : Router
  private usersController : UsersControllers;
  private authMiddleware: AuthMiddleware  

  constructor () {
    this.router = Router()
    this.usersController = new UsersControllers()
    this.authMiddleware = new AuthMiddleware()
  }

  getRoutes() { 
    this.router.get('/', this.authMiddleware.auth.bind(this.authMiddleware),this.usersController.list.bind(this.usersController))
    this.router.post('/', this.usersController.create.bind(this.usersController))
    this.router.put('/', upload.single('avatar_url'),this.authMiddleware.auth.bind(this.authMiddleware),this.usersController.update.bind(this.usersController))
    this.router.post('/auth', this.usersController.auth.bind(this.usersController))
    
    return this.router
  }
}


export {UsersRoutes}