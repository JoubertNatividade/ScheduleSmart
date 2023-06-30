import { Request, Response, NextFunction, json } from "express"
import { verify} from "jsonwebtoken"

interface IPayload {
  sub : string
}

class AuthMiddleware {
  auth ( request : Request, response: Response , next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      return response.status(401).json({
        message: 'Tokem empty',
      })
    }

    const [, token ] = authHeader.split(' ')  

    try {
      const secreteKeyToken: string | undefined = process.env.SECRET_KEY_TOKEN 
      if (!secreteKeyToken) {
        throw new Error("token empty")
      }
      const { sub } = verify(token,secreteKeyToken) as IPayload
      request.user_id = sub 
      return next()
    }catch (err) {
      return response.status(403).json({
        message : "Token expired."
      })
    }
  }
} 
export { AuthMiddleware }