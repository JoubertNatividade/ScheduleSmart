import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export const Content = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
`
export const InforUser = styled.div`
  margin: 3rem 0;
  /* color: var(--primary); */
  color: var(--gray-200);
`


export const NextHour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ScheduleStyles = styled.div`
  width: 50%;
  padding: 0 1rem;
  max-height: 40vh;
  overflow-y: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
  }
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background-color: var(--primary);
  }
`
export const DayStyles = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  .calender {
    background-color: var(--primary);
    height: fit-content;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-50);
    box-shadow: 4px 8px 4px rgb(0,0,0,0.2);
  }
  .day:not(.disabled) {
    background-color: var(--white);
    width: 2rem;
    height: 2rem;
    color: var(--black);
    margin: .2rem;
    border-radius: 8px;
  }
  .selected {
    color: var(--white) !important;
    background-color: var(--secundary)!important;
  }

`


