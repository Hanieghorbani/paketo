import Index from "./Pages/Index"
import Proudct from "./Pages/Product"
const routes = [
  { path: "/", element: <Index /> },
  { path: "/product/:title", element: <Proudct /> },
]

export default routes
