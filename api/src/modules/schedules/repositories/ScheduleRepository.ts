import { startOfDay } from "date-fns";
import { prisma } from "../../../database";
import { ISchedule } from "../Interfaces/SchedulesInterface";

class ScheduleRepository {
  async create({name, phone, date, user_id} : ISchedule) {
    const result = await prisma.schedule.create({
      data : {
        name,
        phone,
        date,
        user_id
      }
    })
    return result
  }
  async findByDate(date: Date, user_id: string) {
    const result = await prisma.schedule.findFirst({
      where: {
        user_id,
        date,
      }
    })
    return result
  }
  async list(date: Date, user_id: string) {
    const result = await prisma.schedule.findMany({
      where: {
        user_id,
        date: {
          gte: startOfDay(date),
        },
      },
      orderBy: {
        date: 'asc'
      },
    });
    return result
  }

  async update(id: string, date: Date){
    const result = await prisma.schedule.update({
      where: {
        id,
      }, 
      data : {
        date,
      }
    })
    return result
  }
}

export {ScheduleRepository}