import {  FunctionComponent, ReactNode } from "react"

interface IRoute{
    path:string,
    children:ReactNode
}

const Route = ({ path,children}:IRoute) => {
    return window.location.pathname === path ? children : null
  }
  
  export default Route