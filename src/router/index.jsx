import { Navigate } from "react-router-dom";
import React,{lazy} from "react";
import { Spin } from "antd";
import Login from "@/views/Login"
import Home from "@/views/Home"
import NotFound from "@/views/NotFound"
const User= lazy(()=>import("@/views/User"))
const Dashboard= lazy(()=>import("@/views/Dashboard"))
const Archive= lazy(()=>import("@/views/Archive"))
const WithLoading=(component)=>(
    <React.Suspense fallback={<Spin/>}>
        {component}
    </React.Suspense>
)
const router=[
    {
        path:"/",
        element:<Navigate to="/Dashboard"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/Dashboard",
                element:WithLoading(<Dashboard/>)
            },
            {
                path:"/User",
                element:WithLoading(<User/>)
            },
            {
                path:"/Archive",
                element:WithLoading(<Archive/>)
            },
            {
                path:"*",
                element:<NotFound/>
            },
        ]
    },
    {
        path:"/Login",
        element:<Login/>
    },
]
export default router