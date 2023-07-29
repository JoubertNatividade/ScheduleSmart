import { Container } from "./styles"

interface IButtton {
  text: string
}

export const Button = ({text,...rest}:IButtton) => {
  return (
    <Container {...rest}>{text}</Container >
  )
}