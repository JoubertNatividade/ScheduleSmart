import { useState } from "react";
import { 
  Container, 
  Content,
  ContentProfile,
  DropDown,
  DropDownMenu,
  DropDownMenuItem,
} from "./styles"
import { BiUserCircle } from 'react-icons/bi';
import { useAuth } from "../../hooks/AuthHooks";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const [open, setOpen ] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()
   return (
    <Container>
      <Content onClick={()=>navigate("/dashboard")}>  
        Schedule Smart
      </Content>
        <DropDown onClick={() => setOpen(!open)}>
          <ContentProfile>
          <BiUserCircle size={20}/>
          <span>Perfil</span> 
          </ContentProfile>
         {open &&  <DropDownMenu>
            <DropDownMenuItem>Editar Perfil</DropDownMenuItem>
            <DropDownMenuItem>Agendamentos</DropDownMenuItem>
            <DropDownMenuItem onClick={logout}>Sair</DropDownMenuItem>
          </DropDownMenu>}
        </DropDown>

    </Container>
  )
}