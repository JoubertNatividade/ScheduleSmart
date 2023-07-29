import { Route, Routes } from "react-router-dom"
import { SignInPage } from "../pages/SignIn"
import { SignUpPage } from "../pages/SignUp"
import { Dashboard } from "../pages/dashboard"

export const RouteApp = () => {
  return (
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    
  )
}