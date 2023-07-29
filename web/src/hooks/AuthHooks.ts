import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export function useAuth() {
  const content = useContext(AuthContext)
  
  if (!content) {
    throw new Error("context not found in AuthContext")
  }
  return content
}