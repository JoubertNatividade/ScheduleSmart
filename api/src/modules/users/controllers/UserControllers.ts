import { NextFunction,  Request, Response, request } from "express";
import { UsersService } from "../services/UsersService";


class UsersControllers{

  private usersService : UsersService

  constructor() {
    this.usersService = new UsersService()
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await this.usersService.list()
      return response.status(200).json(result)
    }catch(err) {
      next(err)
    }
  }

  async create(request:Request, response:Response, next:NextFunction){
    const { name, email, password } = request.body;
    try {
      const result = await this.usersService.create({name, email, password})
      return response.status(201).json(result)
    }catch(err) {
      next(err)
    }
  }
  
  async update(request:Request, response:Response, next:NextFunction){
    const { name, oldPassword, newPassword} = request.body
    const avatar_url  = request.file
    const { user_id } = request
    try {
      const result = await this.usersService.update({
        name, oldPassword, newPassword, avatar_url, user_id
      })
      response.status(200).json(result)
    }catch(err) {
      next(err)
    }
   }

  async auth(request:Request, response:Response, next:NextFunction){
    const { email, password} = request.body 
    try {
      const result = await this.usersService.auth(email, password)
      return response.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}

export {UsersControllers}