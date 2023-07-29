import { NextFunction, Request, Response, request, response } from "express"
import { ScheduleService } from "../services/ScheduleService"
import { parse, parseISO } from "date-fns"
import { prisma } from "../../../database"

class ScheduleController {
  private scheduleService : ScheduleService
  constructor () {
    this.scheduleService = new ScheduleService()
  }

  async list(request: Request, response: Response, next : NextFunction) {
    const {date} = request.query
    const { user_id } = request
    const dateParse = date ? parseISO(date.toString()) : new Date()
    try {
      const result = await this.scheduleService.list(dateParse, user_id)
      return response.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }

  async create(request: Request, response: Response, next : NextFunction){
    const { name,  phone,  date}  = request.body
    const { user_id } = request
    try { 
      const result = await this.scheduleService.create({name,  phone,  date, user_id})
      return response.status(201).json(result)
    }catch (err) {
      next(err)
    }
  }

  async update(request: Request, response: Response, next : NextFunction){
    const { date } = request.body
    const { id } = request.params
    const { user_id } = request
    try {
      const result = await this.scheduleService.update(id, date, user_id)
      return response.status(200).json(result)
    }catch(err) {
      next(err)
    }
  }

  async delete(request: Request, response:Response, next:NextFunction) {
    const {id} = request.params
    console.log("🚀 ~ file: ScheduleController.ts:49 ~ ScheduleController ~ delete ~ id:", id)
    try {
      await this.scheduleService.delete(id)
      return response.status(200)
    }catch (err) {
      next(err)
    }
  }
}


export {ScheduleController}