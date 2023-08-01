import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/index'
import AvisoHard from './Pages/AvisoHard/index'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'


export default function Router(){
    const routes = createBrowserRouter([{
      path: '/',
      element: <Home/>
    },
    {
      path: '/aviso',
      element: <AvisoHard/>
    },{
      path: '/Cadastro',
      element: <Cadastro/>
    },{
      path: '/Login',
      element: <Login/>
    }])

    return <RouterProvider router={routes}/>
}
    