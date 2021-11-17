import ConformEmail from "Pages/Auth/ConfaremEmail"
import { Login } from "Pages/Auth/Login"
import { Register } from "Pages/Auth/Signup"
import TableBasic from "Pages/table"
import  { AuthContext } from "context/auth";
import {useContext, useEffect} from'react'

export  const Routes=()=>{
const {state,dispatch} = useContext(AuthContext)

useEffect(() => {
    console.log("state",state);
    
   
}, [state,dispatch,window.location.pathname])

let  currentRoute=<Login/>;

if(state.isLoggedIn && state.user?.is_active){
    
    currentRoute= <TableBasic/>

  }
  

   else if(!state?.isLoggedIn  && window.location.pathname === "/login" ){
       

    currentRoute= <Login/>
      }
   else if(!state?.isLoggedIn  && window.location.pathname === "/suginup" ){

    currentRoute=<Register/>
      }


      else if(!state.isLoggedIn && !state.user?.is_active &&  window.location.pathname.includes("active")){

        
        currentRoute= <ConformEmail/>
    
      }
    
  

      return currentRoute
  }
  