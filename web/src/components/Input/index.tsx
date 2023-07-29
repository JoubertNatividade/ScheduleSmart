import { ForwardRefRenderFunction, forwardRef } from "react"
import { Container, InputStyled } from "./styles"

interface IInput {
  placeholder: string
  type: string
  error ?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {placeholder, type, error, ...rest}, ref,
  ) => {
  return ( 
    <Container>
        <InputStyled 
        placeholder={placeholder}
        type={type} 
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  )
}

export const Input = forwardRef(InputBase); 