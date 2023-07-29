import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    box-shadow: 7px 8px 7px 7px rgb(0,0,0, 0.2);
    background: linear-gradient(var(--primary),var(--gray-50));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 520px;
    padding: 1rem;
    border: 0;
    border-radius: 8px;

    h2 {
      color: var(--white);
      font-style: normal;
      font-size: 2rem;
      margin-bottom: 4rem;
    }
`