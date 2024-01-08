import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import { Home } from './routes/Home.jsx';
import { Cadastro } from './routes/Cadastro.jsx';
import { ErroPages } from './routes/ErroPages.jsx';
import { Gerenciamento } from './routes/Gerenciamento.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErroPages/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'cadastro',
        element: <Cadastro/>
      },
      {
        path:'gerenciamento',
        element: <Gerenciamento/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
