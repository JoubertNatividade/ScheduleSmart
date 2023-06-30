export interface IUser {
    name: string
    email: string
    password: string
}

export interface IUserUpdate {
    name: string
    password: string
    avatar_url?: FileUpload
}

export interface IUserUpdateData {
    name : string
    oldPassword: string 
    newPassword: string 
    avatar_url ?: FileUpload
    user_id : string
}
interface FileUpload {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: Buffer
    size : number
}
