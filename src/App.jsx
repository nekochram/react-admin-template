import { useEffect } from "react"
import router from "./router"
import { useLocation, useNavigate, useRoutes } from "react-router-dom"

const Authorization = ()=>{
    const navigateTo=useNavigate()
    useEffect(()=>{
        navigateTo("/Login")
    },[])
    return <></>
}

const BeforeRouterEnter = ()=>{
    const location=useLocation()
    const outlet=useRoutes(router)
    const id=localStorage.getItem("userid")
    if(location.pathname.toLowerCase()!="/login"&&!id){
        return <Authorization/>
    }
    return outlet
}

function App() {
  
  return (
    <>
      <BeforeRouterEnter/>
    </>
  )
}

export default App
