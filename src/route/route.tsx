// import { List } from "antd/lib/form/Form"
import List from "../pages/productManage/list"
import ProductConfig from "../pages/productConfig/productConfig"
import Priceconfig from "../pages/productConfig/priceConfig"
export const routes=[
    {path:'/list',element:<List/>,key:1},
    {path:'/config/product',element:<ProductConfig/>,key:2},
    {path:'/config/price',element:<Priceconfig/>,key:3}
]
export const menuRoute=[
    {
        title:'导航1',
        icon:'',
        key:1,
        subMenu:[
            {
                name:'子导航1',
                path:'/list',
                element:<List/>
            }
        ]
    },{
        title:'导航2',
        icon:'',
        key:2,
        subMenu:[
            {
                name:'导航2子1',
                path:'/config/product',
                element:<ProductConfig/>
            },{
                name:'导航2子2',
                path:'/config/price',
                element:<Priceconfig/>
            },
        ]
    }
]