// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import {routes,menuRoute } from '../src/route/route'
// import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import Fram from '../src/conponents/Frame/Fram'
import 'antd/dist/antd.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Fram>
      <div className="App">
        <Routes>
           {
            //路由path动态路由      
            menuRoute.map(menuRoute=>{
              return (
                menuRoute.subMenu.map(route=>{
                  return (<Route path={route.path} element={route.element} key={route.key}></Route>)
                })
              )
            })
          }
        </Routes>
      </div>
    </Fram>
  )
}

export default App
