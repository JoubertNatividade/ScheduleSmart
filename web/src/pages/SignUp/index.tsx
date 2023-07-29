import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Content } from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpService } from '../../service/userService'
import { ISignUp } from '../Interfaces'

export const SignUpPage =  () => {

  const schema = yup.object().shape({
    name: yup.string().required("Campo nome é obrigatório"),
    email: yup.string().email("Digite um email válĩdo").required("Campo email obrigatório"),
    password: yup.string().required("Campo email obrigatório")
  })

  const  { register, handleSubmit, formState: { errors }} = useForm<ISignUp>({
    resolver: yupResolver(schema)
  })
 
  const submit = handleSubmit( async({name, email, password}) => {
    const result  = await SignUpService({name, email, password})
    console.log("🚀 ~ file: index.tsx:33 ~ submit ~ result:", result)
  })

  return (
    <Container>
      <Content>
      <form  onSubmit={submit}>
        <h2>Crie sua conta</h2>
        <Input 
          type='text' 
          placeholder='Digite seu nome'
          {...register("name", {required: true})}
          error={errors.name && errors.name.message}
        />
        <Input 
          type='text' 
          placeholder='Digite seu email' 
          {...register("email", {required: true})}
          error={errors.email && errors.email.message} 
        />
        <Input 
          type='password' 
          placeholder='Digite sua senha'
          {...register("password", {required: true})}
          error={errors.password && errors.password.message} 
        />
        <Button  text='Cadastrar' />
      </form>
      </Content>
    </Container>



  )


}