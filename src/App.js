import "swiper/css"
import AOS from "aos"
import { useEffect } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import useScroll from "./hooks/useScroll"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

function App() {
  const router = useRoutes(routes)
  const [isScrollBtnVisible, offset] = useScroll(400)

  useEffect(() => {
    AOS.init({})
  }, [])
  return <div className="App overflow-x-hidden">
  {router}
  {isScrollBtnVisible && offset > 400 && <ScrollToTop />}
  </div>
}

export default App
