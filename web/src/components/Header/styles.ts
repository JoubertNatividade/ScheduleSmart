import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 7px 8px 7px 7px rgb(0,0,0, 0.2);
  color: var(--white);
`
export const Content = styled.div`
  cursor: pointer;
`
export const ContentProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;
  color: var(--white);
  cursor: pointer;
`
export const DropDown = styled.div`
  position: relative;
  display: flex;
`
export const DropDownMenu = styled.ul`
  position: absolute;
  top: 90%;
  right: -24px;
  padding: 0;
  list-style-type: none;
  border-radius: 8px;
  background: var(--primary);
  color: var(--white);
`
export const DropDownMenuItem = styled.li`
  padding: .7rem 1rem;
  &:hover {
    background: var(--secundary);
    border-radius: 8px;
  }
`


