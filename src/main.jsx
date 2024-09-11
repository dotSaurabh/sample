import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layour from './Layour'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import User from './component/User/User'
import Github from './component/Github/Github'
import { githubInfoLoader } from './component/Github/Github'



// method 1 to create router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layour/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// method 2 to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layour/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route path='github' element={<Github/> } loader={githubInfoLoader} />
    </Route >
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
