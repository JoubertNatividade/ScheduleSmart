import { useForm } from "react-hook-form"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Content } from "./styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "../../hooks/AuthHooks"

interface IFormValues {
  email: string
  password: string
}

export const SignInPage = () => { 
  const {signIn} = useAuth()

  const schema = yup.object().shape({
    email: yup.string().email("Digite um email válĩdo").required("Campo email obrigatório"),
    password: yup.string().required("Campo email obrigatório")
  })
  const { register, handleSubmit, formState: {errors} } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  })

  const submit = handleSubmit(({email, password})=> {
    console.log("🚀 ~ file: index.tsx:29 ~ submit ~ password:", password)
    console.log("🚀 ~ file: index.tsx:29 ~ submit ~ email:", email)
    signIn({email, password}) 
  })

  return (
    <Container>
       <Content>
        <form onSubmit={submit} >
          <h2>Olá, seja bem vindo!</h2>
          <Input 
            type="text" 
            placeholder="Informe seu email"
            {...register('email', {required: true})}
            error={errors.email && errors.email.message} 
            />
          <Input 
            type="password" 
            placeholder="Informe sua senha"
            {...register("password", {required: true})}
            error={errors.password && errors.password.message} 
          />

          <Button text="Entar" />
        </form>
       </Content>
      </Container>
  )  
}