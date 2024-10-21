import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import AboutHistory from './pages/aboutUs/AboutHistory'
import AboutTeam from './pages/aboutUs/AboutTeam'
import ContactUs from './pages/ContactUs'
import PageNotFound from './pages/PageNotFound'
import User from './pages/User'
import Github from './pages/Github'
import {githubInfoLoader} from './pages/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutUs /> 
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      {
        path: 'github',
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: 'about',
        children: [
          {
            path: 'history', 
            element: <AboutHistory />
          },
          {
            path: 'team', 
            element: <AboutTeam />
          }
        ]
      },
      {
        path: 'user/:userid',
        element: <User/>,
        
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
     
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(

//      <Route path='/' element={<Layout/>} >
//        <Route path='' element={<Home/>} />
//       <Route path='about' element={<AboutUs/>} />
//       <Route path='contact' element={<ContactUs/>} />
//       <Route path='user/:userid' element={<User/>}/>
//       <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
//      </Route>
//   )
// )
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
