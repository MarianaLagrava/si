import React from 'react'
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate(); 

    const onClickLogin = (e) =>{
        e.preventDefault();
        navigate("/Login");
    }



    return ( 
    
        <button className="flex items-center justify-center h-12 gap-3 hover:bg-dark-400 hover:text-white lg:w-1/4 lg:h-auto" onClick={onClickLogin} >  Volver al Login</button>

    
    );
}
 
export default ErrorPage;