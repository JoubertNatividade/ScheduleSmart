import { Container, Content,  ContentIcons  } from './styles'
import {  FiEdit,FiTrash2} from 'react-icons/fi'
import {  getHours, isAfter} from "date-fns"
import { ISchedule } from '../../pages/dashboard/ISchedule'
import { ModalEdit } from '../Modal'
import { useState } from 'react'


export const Card = ( {id,name,date, phone, user_id}: ISchedule) => {
  const isAfterDate = isAfter(new Date(date), new Date());
  const [openModal, setOpenModal ] = useState(false)
  const dateFormated = new Date(date)
  const hour = getHours(dateFormated)

  let phoneFormatted = phone.replace(/\D/g, '');
  phoneFormatted = phoneFormatted.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');

  const handleChangeModal = () => {
    setOpenModal(!openModal)
  }

  return (
  <>
    <Container>
      <Content>
        <strong className={`${!isAfterDate && "disabled"}`}> {hour} h </strong>
        <div>
          <span>{name} </span>
          <p>{phoneFormatted} </p>
        </div>

      </Content>
      <ContentIcons>
        <FiEdit size={20} onClick={ () => isAfterDate &&  handleChangeModal()}/>
        <FiTrash2  size={20} color="#EB2E2E"/>
      </ContentIcons>
    </Container>

    <ModalEdit 
      openModal={openModal} 
      handleChangeModal={handleChangeModal} 
      hour={hour}
      name={name}
    />
  </>
  )
}