import { 
  Container, 
  Content, 
  HeaderModal, 
  BodyModal,
  Fotter,
  DivSelect,
} from "./styles"
import { AiOutlineClose } from "react-icons/ai"

interface IModalEdit {
  openModal: boolean
  handleChangeModal: () => void
  hour: number
  name: string
}


export const ModalEdit = ({openModal,handleChangeModal, hour, name} : IModalEdit) => {

  const currentDate = new Date().toISOString().split('T')[0]


  if (openModal) {
    return (
      <Container>
        <Content>
          <HeaderModal>
            <h2>Editar Horário</h2>
            <AiOutlineClose size={20} onClick={handleChangeModal}   />
          </HeaderModal>
          <BodyModal>
            <p> {hour}h {name}</p>
            <div className="hour">
              <label htmlFor="">Horário</label>
              <input type="date" defaultValue={currentDate} />
            </div>

            <DivSelect>
              <label htmlFor="">Horário</label>
              <select name="" id="">
                <option value="">09:00</option>
                <option value="">09:00</option>
                <option value="">09:00</option>
                <option value="">09:00</option>
              </select>
            </DivSelect>
          </BodyModal>
           <Fotter>
              <button onClick={handleChangeModal}>Cancelar</button>
              <button>Editar</button>
           </Fotter>
        </Content>
      </Container>
    )
  }else {
    return <></>
  }
}