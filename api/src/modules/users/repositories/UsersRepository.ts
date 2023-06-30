import { prisma } from "../../../database";
import { IUser, IUserUpdate } from "../interface/UserInterface";



export class UsersRepository {
  
  async create({ name, email, password }:IUser) {
    const result = await prisma.users.create({
      data:{
        name,
        email,
        password
      }
    })
    return result
  }

  async findByEmail (email: string ) {
    const result = await prisma.users.findUnique({
      where: {
        email
      }
    })

    return result
  }

  async findById (id: string ) {
    const result = await prisma.users.findUnique({
      where: {
        id
      }
    })
    return result
  }
  async list () {
    const result  = await prisma.users.findMany()
    return result
  }

  async update(name : string, avatar_url: string, user_id: string ) {
    const result = await prisma.users.update({
      where: {
        id: user_id
      }, 
      data : {
        name,
        avatar_url
      }
    })
    return result
  }
  async updatePassword( password: string, user_id: string ) {
    const result = await prisma.users.update({
      where: {
        id: user_id
      }, 
      data : {
        password,
      }
    })
    return result
  }
 
}