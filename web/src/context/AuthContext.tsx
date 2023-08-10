import { ReactNode, createContext, useEffect, useState } from "react";
import { ISignIn } from "../pages/Interfaces";
import { SignInService } from "../service/userService";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface IAuthProvider {
  children : ReactNode
}
interface IAuthContextData{   
  signIn : ({ email, password}: ISignIn) => void
  logout :()=> void
  user: IUserData
  scheduleAvailable: Array<string>
  schedules : Array<ISchedule>
  date: string
  handleSetDate: (date: string) => void
  isAuthenticated: boolean;
}
interface IUserData {
  name: string
  email: string
  password: string
}
export interface ISchedule {
  id: string
  name: string
  phone: string
  date : string
  user_id: string

}

export const AuthContext = createContext({} as IAuthContextData)

export function AuthProvider ({children}: IAuthProvider) {
  const navigate = useNavigate()

  const [schedules, setSchedules] = useState<Array<ISchedule>>([])
  const [date, setDate] = useState('')
 
  const scheduleAvailable = [
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
  ] 
  const [user, setUser] = useState(()=> {
    const user = localStorage.getItem("userStorage")
    if (user) {
      return JSON.parse(user)
    }
    return {}
  })
  const handleSetDate = (date: string) => {
    setDate(date)
  }
  useEffect(() => {
    api.get('/schedule', {
      params: {
        date,
      }, 
    }).then((response) => {
    setSchedules(response.data)
    }).catch((error) => {
      console.log("🚀 ~ file: index.tsx:47 ~ useEffect ~ error:", error)
    })
  },[date])

  const isAuthenticated = !!user && Object.keys(user).length !== 0;

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
    <AuthContext.Provider value={{signIn,logout, user , scheduleAvailable, schedules, date, handleSetDate, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}