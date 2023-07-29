import styled  from "styled-components";


export const Container = styled.div`
  background: rgb(0,0,0,0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;
`
export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  background: var(--white);
  border-radius: 8px;
`
export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 8px 8px 0 0;
  background: var(--primary);
  color: var(--white);
  svg:hover {
    color: var(--danger)
  }

`
export const BodyModal = styled.div`
  padding: 2rem;
  p {
    font-size: 1.5rem;
    color: var(--primary);
  }


  .hour {
    label {
      color: var(--secundary);
    }
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      border: 1px solid var(--primary);
      border-radius: 8px;
      width: 40%;
      padding: .5rem;
      color: var(--secundary)
    }
  }
`
export const DivSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secundary);

  select {
    border: 1px solid var(--primary);
    border-radius: 8px;
    padding: .5rem;
    color: var(--primary);
    border: 8px;
    width: 40%;
  }
`
export const Fotter = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 3rem ;
  padding: 2rem;
  button  {
    display: flex;
    align-items: center;
    border: none;
    height: 2.5rem;
    padding: 1rem;
    border-radius: 8px;
  
    &:hover{
      background: var(--gray-50);
    }
  }
`





