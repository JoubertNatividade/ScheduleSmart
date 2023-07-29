import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  border-radius: 8px;
  & + div {
    margin-top: 1rem;
  }
  box-shadow: 7px 7px 7px rgb(0,0,0,0.2);
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  strong {  
    background: var(--secundary);
    padding: 1rem;
    border-radius: 8px 0 0 8px;
  }
  strong.disabled {
  background-color: var(--gray-200) !important;
}
  div {
    span {
    font-size: 1.2rem;
    color: var(--black);
   }
    p {
      font-size: .8rem;
    }
  }
`
export const ContentIcons = styled.div`
  display:  flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`

