import { BrowserRouter } from "react-router-dom"
import { RouteApp } from "./routes"
import { GlobalStyles } from "./global"
import { AuthProvider } from "./context/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
     <>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <RouteApp />
        </AuthProvider>
        <GlobalStyles />
      </BrowserRouter>
    </>

  )
}

export default App
