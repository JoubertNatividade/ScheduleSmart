import { startOfHour, isBefore, getHours } from "date-fns"
import { ISchedule } from "../Interfaces/SchedulesInterface"
import { ScheduleRepository } from "../repositories/ScheduleRepository"
import { id } from "date-fns/locale"

class ScheduleService { 
  private scheduleRepository : ScheduleRepository
  constructor () {
    this.scheduleRepository = new ScheduleRepository()
  }
  
  async create({name, phone, date, user_id}: ISchedule) {
    const dateFormated = new Date(date)
    const hourStart = startOfHour(dateFormated)

    if(isBefore(hourStart,  new Date())) {
      throw new Error("It is not allowed to schedule old date")
    }

    const checkIsAvailable  = await this.scheduleRepository.findByDate(hourStart, user_id)
    if (checkIsAvailable ) {
      throw new Error("Schecule not available")
    }

    const hour = getHours(hourStart) 
    if (hour < 9 || hour > 18) {
      throw new Error("Schedule not availabe. Only 09:00am - 06:00pm")
    }

    const result = await this.scheduleRepository.create({name, phone, date:hourStart, user_id})

     return result
  }
  async list (date: Date, user_id: string) {
    const result = await this.scheduleRepository.list(date, user_id)
    return result
  }

  async update(id: string, date: Date,user_id :string) {
    const dateFormated = new Date(date)
    const hourStart = startOfHour(dateFormated)

    if(isBefore(hourStart, new Date())){
      throw new Error("It is not allowed to schedule old date")
    }
    const checkIsAvailable = await this.scheduleRepository.findByDate(hourStart, user_id)
    if(checkIsAvailable) {
      throw new Error("Schecule not available")
    }
    const result  = await this.scheduleRepository.update(id, hourStart)
    return result
  }

}


export {ScheduleService}