import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

//Pages
import Contact from './components/Contact';
import About from './components/About';
import Body from './components/Body';
import RestMenu from './components/RestMenu.jsx';
import Cart from './components/Cart.jsx';

const setRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={setRouter} />
  </React.StrictMode>,
)
