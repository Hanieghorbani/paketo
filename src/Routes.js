import Index from "./Pages/Index"
import Proudct from "./Pages/Product"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const routes = [
  { path: "/", element: <Index /> },
  { path: "/product/:title", element: <Proudct /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]

export default routes
