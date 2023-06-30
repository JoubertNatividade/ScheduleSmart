import express, { NextFunction, Request, Response } from "express";
import { UsersRoutes } from "./modules/users/users.routes";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const usersRoutes = new UsersRoutes().getRoutes()

app.use("/users", usersRoutes)

app.use((err:Error, request:Request, response:Response, next: NextFunction) => {
  if (err instanceof Error ){
    response.status(404).json({
      message: err.message,
      statusCode: 404
    })
    console.log('')
  }  else  {
    response.status(500).json({
      message: "Error internal error",
      statusCode: 500
    })
  }
}) 


app.listen(3333, () => console.log("server is runnig port 3333"))