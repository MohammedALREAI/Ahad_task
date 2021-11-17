import React, { useReducer, createContext, useEffect, FC } from "react";


interface IUser {
    isLoggedIn: boolean,
    user: null|User,
    isLoggingIn: boolean,
    message:string


}
const initialState:IUser = {
    isLoggedIn: false,
    user: {} as  User,
    isLoggingIn: false,
    message:""
  };
  


  export const AuthContext = createContext<{
    state:IUser,
    dispatch:React.Dispatch<AuthUser> |any
  }>({
    state:initialState,
    dispatch:{}
  });


  export  enum  EnumUserAction {
    LOGIN_REQUEST="LOGIN_REQUEST",
    LOGIN_SUCCESS="LOGIN_SUCCESS",
    LOGIN_FAILURE="LOGIN_FAILURE",
    Register_REQUEST="Register_REQUEST",
    Register_SUCCESS="Register_SUCCESS",
    Register_FAILURE="Register_FAILURE",
    LOGOUT_SUCCESS="LOGOUT_SUCCESS",

    /// active  account  
    ACTIVE_USER_SUCCESS="ACTIVE_USER_SUCCESS",
    ACTIVE_USER_REQUEST="ACTIVE_USER_REQUEST",
    ACTIVE_USER_FAILURE="ACTIVE_USER_FAILURE",

  }



interface User{
  id:string
  fnmae: string,
  lname: string,
  email:string,
  password: string
  data:string,
  is_active:false,
  projects:Array<number>
}



/** @TYPE  FOR  HAPE  OF  ALL  RHE  DISPACH  SHAPE */


interface IActiveUserFailure{
  type:EnumUserAction.ACTIVE_USER_FAILURE,
  payload:{
message:string
  }
}
interface IActiveUserSuccess{
  type:EnumUserAction.ACTIVE_USER_SUCCESS;
  payload:{
    isActive:boolean,
    message:string,
  
  }
}
interface IActiveUserRequest{
  type:EnumUserAction.ACTIVE_USER_REQUEST,
 
}








  export interface loginSuccess{
    type: EnumUserAction.LOGIN_SUCCESS;
    payload: { user: User }

}

  export interface loginRequest{
    type: EnumUserAction.LOGIN_REQUEST;

}
  export interface loginFailure{
    type: EnumUserAction.LOGIN_FAILURE;
    payload:{
    message:string
}}

/**
 * 
 */
  export interface IRegisterSuccess{
    type: EnumUserAction.Register_SUCCESS;
    payload: { 
      user: User,
      message:string
     }

}

  export interface IRegisterRequest{
    type: EnumUserAction.Register_REQUEST;

}
  export interface IRegisterFailure{
    type: EnumUserAction.Register_FAILURE;
    payload:{
      message:string
    }
}
  export interface logoutSuccess{
    type: EnumUserAction.LOGOUT_SUCCESS;

}


type AuthUser = loginSuccess|loginRequest|loginFailure|logoutSuccess |IRegisterSuccess|
IRegisterRequest|IRegisterFailure|IActiveUserFailure|IActiveUserSuccess|IActiveUserRequest


  
  const reducer = (state:IUser=initialState, action:AuthUser) => {
    switch (action.type) {
      case EnumUserAction.LOGIN_REQUEST:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          isLoggingIn: true
        };
      case EnumUserAction.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.user,
          isLoggingIn: false
        };
      case EnumUserAction.LOGIN_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          isLoggingIn: false,
          message:action.payload.message
        };
      case EnumUserAction.LOGOUT_SUCCESS:
        return {
          ...initialState
        };
      case EnumUserAction.Register_REQUEST:
        return {
          ...initialState
        };
      case EnumUserAction.Register_SUCCESS:
        return {
          ...initialState,
          message:action.payload.message,
          user:action.payload.user
        };
      case EnumUserAction.Register_FAILURE:
        return {
          ...initialState,
          message:action.payload.message,

        };
      default: return  state
    }
  };



  /**
   * signIn action in  reducer 
   * @param dispatch 
   * @param userData 
   * @returns 
   */



  export const signIn = async (dispatch: React.Dispatch<loginSuccess|loginRequest|loginFailure>, userData:{
    email:string,
    password:string
  }) => {
    dispatch({
      type:EnumUserAction.LOGIN_REQUEST
    })
    console.log("response 2");
    console.log("response userData.email",userData.email);
    console.log("response userData.password",userData.password);
    
    try {
      const  res =  await fetch(`http://localhost:3001/users/?email=${userData.email}&password=${userData.password}`)
      const  response= (await res.json())
      console.log("response response data",response);
      


      if(!response.length){
              // window.location.pathname=`/`

        return    dispatch({
          type:EnumUserAction.LOGIN_FAILURE,
          payload:{
          message:"there  is something  warring User name and password"
          }
        })


    }
    

      else if(response.length && !response[0].is_active){
        console.log("response 4");


        window.location.pathname=`/active/?id=${response[0].id}`

        return  dispatch({
          type:EnumUserAction.LOGIN_FAILURE,
          payload:{
          message:"you need  to  active  your  email"
          }
        })
    
    }
      else{
        console.log("response 5");

      localStorage.setItem("user", JSON.stringify(response[0] as User));

      
      window.location.pathname=`/`

      
      return dispatch({
        type:EnumUserAction.LOGIN_SUCCESS ,
        payload: {
          user: response[0] as User
        }
      });
    }
    } catch (error) {
      throw  new  Error(`there  is  some  error  ${error}`)
      
    }

  };
  

  

  export const signUp = async (dispatch: React.Dispatch<IRegisterSuccess|
    IRegisterRequest|
    IRegisterFailure>, userData:{
    email:string,
    fnma:string,
    lName:string,
    data:string,
    password:string,
    is_active: false,

  }) => {
    dispatch({
      type:EnumUserAction.Register_REQUEST
    })
                console.log(" enter  to  signUp",userData);

    try {

      // will be  chack if  email  is  found  or  not 

      const  isFoundEmail =  await fetch(`http://localhost:3001/users/?email=${userData.email}`)
      const  response= (await isFoundEmail.json())
      
        if(response.length) {
           window.location.pathname="/login"
           
         return dispatch({
          type:EnumUserAction.Register_FAILURE,
          payload:{
            message:"this email  is  found  plase  use  other  email  or  login ..😊😊"
          }
        })
      }
      else{         

        try {

          const  data={
    "email": userData.email,
    "password":userData.password,
    "data": userData.data,
    "fnma": userData.fnma,
    "lName": userData.lName,
    "is_active": false,
    "projects": [  
    ],
}
          
          
          
          const  createdUser=await  fetch(`http://localhost:3001/users/`,
          {
             headers: {
                   'Content-Type': 'application/json'
                   },
            method:"POST",
            body:JSON.stringify(data)
          }
          )

          const  responseCreated= (await createdUser.json()) as  User
              localStorage.setItem("user", JSON.stringify(responseCreated as User));

  
                  window.location.pathname=`/active/?id=${responseCreated.id}`

          return    dispatch({
            type:EnumUserAction.Register_SUCCESS,
            payload:{
              user:responseCreated,
            message:"please  go  to  active  page  to  active  status"
            }
          })
        } catch (error) {
          throw new  Error(`there  some thing  to  creat  user${error}`)
          
        }

    }
     
    } catch (error) {
      throw  new  Error(`there  is  some  error  ${error}`)
      
    }

  };

  export const activeUserById = async (dispatch: React.Dispatch<IActiveUserFailure|IActiveUserSuccess|IActiveUserRequest>,id:string) => {
    
    dispatch({
      type:EnumUserAction.ACTIVE_USER_REQUEST
    })
    
    try {

      // will be  chack if  email  is  found  or  not 

      const  isFoundEmail =  await fetch(`http://localhost:3001/users/?id=${id}`)
      const  response= (await isFoundEmail.json())
      console.log("response isFoundEmail");

        if(!response.length ){
          return dispatch({
            type:EnumUserAction.ACTIVE_USER_FAILURE,
            payload:{
              message:"there  is   no  user "
            }
          })


          
        
        }else if(response.length && ((response[0] as User).is_active)) {


         return dispatch({
          type:EnumUserAction.ACTIVE_USER_FAILURE,
          payload:{
            message:"the is  active  try  to  login  please"
          }
        })
      }


      else{      

  const temp = localStorage.getItem('user')
          const user = temp ? JSON.parse(temp) : {}
        const  newuserData=
    {
      "email": user.email,
      "password": user.password,
      "data": user.data,
      "fnma": user.fnma,
      "lName": user.lName,
      "is_active": true,
      "id": id,
       "projects": [
        user.projects
      ]
    
    }
        

        try {

      await fetch(`http://localhost:3001/users/${id}`,
          {
            method:"POST",
            body:JSON.stringify(newuserData)
          }
          )
      

         
          
          localStorage.setItem("user", JSON.stringify(newuserData));
          console.log("response is_active ACTIVE_USER_SUCCESS    +++++++");

  
  
          window.location.pathname=`/`
          return dispatch({
            type:EnumUserAction.ACTIVE_USER_SUCCESS,
            payload:{
              isActive:true,
            message:" you are  active :)💖💖💖💖"
            }
          })

        } catch (error) {
          throw  new  Error(`there  is  some  error  ${error}`)

          
        }

    }
     
    } catch (error) {
      throw  new  Error(`there  is  some  error  ${error}`)
      
    }

  };


 


  export const signOut = (dispatch: React.Dispatch<logoutSuccess>) => {
    localStorage.clear();
    window.location.pathname="/login";
    return dispatch({
      type: EnumUserAction.LOGOUT_SUCCESS
    });
  };


  const AuthProvider:FC = ({ children }) => {
    const persistedUser = localStorage.getItem("user");

    const persistedUserState = {
      isLoggedIn:persistedUser? true:false,
      user: persistedUser ? JSON.parse(persistedUser) : initialState,
      isLoggingIn: persistedUser? true:false,
      message:""

    };
    const [state, dispatch] = useReducer(reducer, persistedUserState);
  
    useEffect(() => {

    }, [dispatch]);
  
    return (
        <AuthContext.Provider value={{state,dispatch}}>
          {children}
        </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;



