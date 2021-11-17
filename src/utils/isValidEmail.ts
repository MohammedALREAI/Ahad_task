
export const  isValidEmail=(email:string)=>{
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email)
}



export const  isValidPassword=(password:string)=>{

    const  res=/^[A-Za-z]\w{7,14}$/;

return res.test(password)
}

export const  isValidName=(password:string)=>{

    const  res=/^[A-Za-z]\w{2,14}$/;

return res.test(password)
}

export const  isValidDate=(date:string)=>{


return  new Date(date).toString() === 'Invalid Date'
}




