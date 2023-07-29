import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  & + div {
    margin-top: 0.75rem;
  }
  span {
    color: "red";
  }
`
export const InputStyled = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  outline: none;
  font-size: 18px;
`