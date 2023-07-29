import { DayPicker } from "react-day-picker"
import { Header } from "../../components/Header"
import { useAuth } from "../../hooks/AuthHooks"
import { 
  Container, 
  Content ,
  NextHour,
  ScheduleStyles , 
  InforUser,
  DayStyles,
} from "./styles"
import 'react-day-picker/dist/style.css'
import { Card } from "../../components/Card"
import { useEffect, useState } from "react"
import {  ptBR } from "date-fns/locale"
import { format, isToday } from "date-fns"
import { api } from "../../service/api"
import { ISchedule } from "./ISchedule"
import { Modal } from "../../components/Modal"

export const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState<Array<ISchedule>>([])
  const { user} = useAuth()
  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day == 0 || day ==6;
  }
  const isWeekDay = (date: Date) => {
    const day = date.getDate()
    return day != 0 && day != 6
  }
  const handleDayClick = ( date: Date ) => {
    setDate(date)
  }


  useEffect(() => {
    api.get('/schedule', {
      params: {
        date,
      }, 
    }).then((response) => {
    setSchedules(response.data)
    }).catch((error) => {
      console.log("🚀 ~ file: index.tsx:47 ~ useEffect ~ error:", error)
    })
  },[date])



  return (
    <Container>
      <Content>
        <Header />
        <InforUser>
          <h1>Olá, {user.name} , seja bem vindo!</h1>
          <p>Essa é a sua lista de agendamentos: {isToday(date) && <span> hoje, </span> } dia {format(date, "dd/MM/yyy")} </p>
        </InforUser>

        <h2>Próximos horários</h2>
        <NextHour>
          <ScheduleStyles>

            {
              schedules.map(({id,name,date, phone, user_id }, index) => {
                return(
                  <Card 
                    key={index}
                    id={id}
                    name={name}
                    date={date}
                    phone={phone}
                    user_id={id}
                  />
                )
              })
            }
          </ScheduleStyles>
          <DayStyles>
            <DayPicker 
              className="calender" 
              classNames={{
                day: "day",
              }}
              selected={date}
              modifiers={{ available: isWeekDay }}
              mode="single"
              modifiersClassNames={{
                selected: "selected"
              }}
              onDayClick={handleDayClick}
              locale={ptBR}
              disabled={isWeekend}
              fromMonth={new Date()}
            />
          </DayStyles>
        </NextHour>     
      </Content>
    </Container>
  )
}