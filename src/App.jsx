import { createBrowserRouter , RouterProvider} from "react-router"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import ResearchDesk from "./Pages/ResearchDesk"

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <Home />
     }, 
    { 
      path: "/about", 
      element: <AboutUs />
     },
     {
      path: "/services",
      element: <Services/>
     },
     {
      path: "/contact",
      element: <Contact/>
     },
     {
      path: "/research-desk", 
      element: <ResearchDesk/>
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
