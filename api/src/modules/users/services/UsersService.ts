import { compare, hash } from "bcrypt"
import { IUser, IUserUpdateData, IUserUpdate } from "../interface/UserInterface";
import { UsersRepository } from "../repositories/UsersRepository"
import { s3 } from "../../../config/aws";
import { v4 as uuid } from 'uuid'
import { sign } from "jsonwebtoken";

export class UsersService {

  private usersRepository : UsersRepository

  constructor() {
    this.usersRepository = new UsersRepository()
  }
  async auth(email:string, password:string) {
    const findUser = await this.usersRepository.findByEmail(email)
    if (!findUser) {
      throw new Error("email or password incorrect. Try again")
    }
    const passwordMath =  await compare(password, findUser.password)
    if(!passwordMath) {
      throw new Error("email or password incorrect. Try again")
    }
    const secreteKeyToken: string |undefined = process.env.SECRET_KEY_TOKEN
    if (!secreteKeyToken) {
      throw new Error("There no token")
    }
    const token = sign({email}, secreteKeyToken, {
      subject: findUser.id,
      expiresIn: "2 days"
    })
    return {
      token,
      name: findUser.name,
      email: findUser.email
    }
  }
  async create({ name, email, password}: IUser) {

    const findUser = await this.usersRepository.findByEmail(email)
    if (findUser) {
      throw new Error("User alread exist")
    }
 
    const passwordHash = await hash(password, 10)

    const user = await this.usersRepository.create({name, email, password:passwordHash})
    return user
  }

  async list() {
    const result = await this.usersRepository.list()
    return result
  }

  async update({name, oldPassword, newPassword, avatar_url, user_id}: IUserUpdateData) {
    if (oldPassword && newPassword ){
      const user =  await this.usersRepository.findById(user_id)
      if (!user) {
        throw new Error("user not found")
      }
      const passwordMath = await compare(oldPassword, user.password)
      if (!passwordMath) {
        throw new Error("unable compare password")
      }
      const password = await await hash(newPassword, 10)
      await this.usersRepository.updatePassword(password, user_id)
    } 

    if(avatar_url) {
      const uploadImage = avatar_url?.buffer
      const uploadS3 = await s3.upload({  
        Bucket: `${process.env.AWS_BUCKET}`,
        Key : `${uuid()}-${avatar_url?.originalname}`,
        Body: uploadImage
      }).promise()
      await this.usersRepository.update(name, uploadS3.Location ,user_id)
    }
    return {
      message: "updated success!"
    }
  } 
}