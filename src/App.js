import "swiper/css"
import AOS from "aos"
import { useEffect } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./Routes"

function App() {
  const router = useRoutes(routes)
  useEffect(() => {
    AOS.init({})
  }, [])
  return <div className="App">{router}</div>
}

export default App
