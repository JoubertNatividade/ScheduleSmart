import { ReactNode, createContext, useState } from "react";
import { ISignIn } from "../pages/Interfaces";
import { SignInService } from "../service/userService";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IAuthProvider {
  children : ReactNode
}
interface IAuthContextData{ 
  signIn : ({ email, password}: ISignIn) => void
  logout :()=> void
  user: IUserData
  scheduleAvailable: Array<string>
}
interface IUserData {
  name: string
  email: string
  password: string
}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider ({children}: IAuthProvider) {

  const [user, setUser] = useState(()=> {
    const user = localStorage.getItem("userStorage")
    if (user) {
      return JSON.parse(user)
    }
    return {}
  })
  const scheduleAvailable = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '12:00', '13:00','14:00', 
    '15:00', '16:00','17:00','18:00'
  ]
  const navigate = useNavigate()
  async function signIn({email, password}: ISignIn) {
    try {
      const {data} = await SignInService({email, password})
      console.log("🚀 ~ file: AuthContext.tsx:22 ~ signIn ~ data:", data)
      const {token, user } = data
      const userData = {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url
      }
      localStorage.setItem("tokenStorage",token)
      localStorage.setItem("userStorage",JSON.stringify(userData))  
      setUser(userData)
      navigate("/dashboard")
      return data
    }catch(error) {
      if (isAxiosError(error)){
        toast.error(error.response?.data.message)
      }
    }
  }
   
  async function logout(){
    localStorage.removeItem("tokenStorage")
    localStorage.removeItem("userStorage")
    navigate("/")
  }
  return (
    <AuthContext.Provider value={{signIn,logout, user , scheduleAvailable}}>
      {children}
    </AuthContext.Provider>
  )
}