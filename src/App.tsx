import AuthProvider, { AuthContext } from "context/auth";
import ConformEmail from "Pages/Auth/ConfaremEmail";
import { Login } from "Pages/Auth/Login";
import { Register } from "Pages/Auth/Signup";
import TableBasic from "Pages/table";
import { useContext, useEffect } from "react";
import { Routes } from "Routes";

function App() {







  return (
    <AuthProvider>
       <Routes/>       
    </AuthProvider>
    );
}

export default App;
