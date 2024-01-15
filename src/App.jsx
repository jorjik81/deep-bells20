import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,} from "react-router-dom"
import Root from "./components/root"
import About from "./components/about"
import Projects from "./components/projects"
import Resume from "./components/resume"
import Contacts from "./components/contacts"
import Footer from "./components/footer"
import './styles.css';
function App() {
 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<About />} />     
        <Route path="/projects" element={<Projects/>} />         
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts/>} />
      </Route>
    )
 )

  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>

  
    </>
  )
}

export default App
