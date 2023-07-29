import { ISignIn, ISignUp } from "../pages/Interfaces";
import { api } from "./api";

export  async function SignUpService({ name, email, password }: ISignUp) {
  const result = await api.post("/users", {
    name,
    email,
    password
  })
  return result
}

export  async function SignInService({ email, password }:ISignIn) {
  const result = await api.post("/users/auth", {
    email,
    password
  })
  return result
}