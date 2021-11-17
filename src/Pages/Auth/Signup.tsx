import React, { useContext, useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';

import {
    Box,
    useMediaQuery,
    Container,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,

    Typography,
    FormHelperText
} from '@material-ui/core';
import { isValidEmail, isValidName, isValidPassword } from 'utils/isValidEmail';
import { InputController } from 'components/controll/Input';
import { InputPasswordController } from 'components/controll/InputPassword';
import { AuthContext, signUp } from 'context/auth';
import { useStyles } from './styles/SuginUp.style';
import { IShape, T } from './types/suginUp';


export const Register = () => {


    const classes = useStyles();
    const matchDownSM = useMediaQuery('sm');
    const ContextAuth =useContext(AuthContext);



    const [state, setState] = useState<IShape>({
        email: {
            values: "",
            errors: "",
            label: "Email Address / Username",
            focus: true,
            touch: true,
            name: "email"


        },
        confirmEmail: {
            values: "",
            errors: "",
            label: "Confirm Email Address",
            focus: true,
            touch: true,
            name: "confirmEmail"

        },
        password: {
            values: "",
            errors: "",
            label: "password",
            focus: true,
            touch: true,
            name: "password"


        },
        confirmPassword: {
            values: "",
            errors: "",
            label: "Confirm password",
            focus: true,
            touch: true,
            name: "confirmPassword"

        },
        date: {
            values: "",
            errors: "",
            label: "date",
            focus: true,
            touch: true,
            name: "date"

        },
        fName: {
            values: "",
            errors: "",
            label: "First  name",
            focus: true,
            touch: true,
            name: "fName"

        },
        lName: {
            values: "",
            errors: "",
            label: "lName",
            focus: true,
            touch: true,
            name: "lName"
        },

    })


    const [state2, setState2] = useState<{
        showPassword: boolean,
        showPassword2: boolean,
        loading: boolean,
        checked: boolean,
        errors:string

    }>({
        showPassword: false,
        showPassword2: false,
        loading: false,
        checked: true,
        errors:""

    })






    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setState2(prev=>({
                ...prev,
                loading:false
            }))

            if(!state2.checked){
                setState2(prev=>({
                    ...prev,
                    errors:"please  accept  the  Roule  and  police's"
                }))
                return
            }



            console.log("state.email.values",!state.email.values)

if(!state.email.values
    ||! state.password.values 
    ||! state.date.values  
    ||!state.confirmEmail.values
    ||!state.confirmPassword.values
    ||!state.lName.values
    ||!state.fName.values
    
    ){
    console.log("empty")
    return;
}
else {
            console.log("testenter signUp ")
signUp(ContextAuth.dispatch,{
    email:state.email.values,
    password:state.password.values,
    data:state.date.values,
    fnma:state.fName.values,
    lName:state.lName.values,
    is_active: false,

})



}


    }

    const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
        let w = (e.target.name) as T

        setState((prevState) => ({
            ...prevState,
            [w]: {
                ...prevState[w],
                focus: true,
                touch: false
            }
        }))
        return}

    


    const  handleChangeWithDate=(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setState((prevState) => ({
            ...prevState,
            date: {
                ...prevState["date"],
               values:e.target.value
            }
        }))
        console.log(state.date.values);
        
        
    }



    const handleOnBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {

        let w = (e.target.name) as T
            if (e.target.value === " ") {
                setState((prevState) => ({
                    ...prevState,
                    [w]: {                        
                        ...prevState[w],
                        touch: false
                    }
                }))
            } else {
                setState((prevState) => ({
                    ...prevState,
                    [w]: {
                        ...prevState[w],
                        touch: false,
                    }
                })

                )
            }}

        

            const handleOnBlurPassword = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {

                let w = (e.target.name) as T
                if(state.confirmPassword.values!==state.password.values){

                    setState((prevState) => ({
                        ...prevState,
                        confirmPassword: {                        
                            ...prevState.confirmPassword,
                            touch: false,
                            errors:"should  be  the  same  password  "
                            
                        }
                    }))

                }else {
                    setState((prevState) => ({
                        ...prevState,
                        [w]: {
                            ...prevState[w],
                            touch: false,
                        }
                    })
    
                    )
                }    
                    }
        


        
    


    




    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let w = (e.target.name) as T


            if (e.target.value === " ") {

                setState((prevState) => ({
                    ...prevState,
                    [w]: {
                        ...state[w],
                        values: (e.target.value).trim().toLowerCase(),
                        errors: `you  cant  used  empty  ${e.target.name}`
                    }
                }))
                return
            }

            else if (e.target.name === "email" || e.target.name === "confirmEmail") {
                


                if (!isValidEmail(e.target.value)) {
                    setState((prevState) => ({
                        ...prevState,
                        [w]: {
                            ...prevState[w],
                            values:e.target.value,
                            errors: `you  cant  used  valid  ${e.target.name} email `
                        }

                    }))

                } else {

                    setState((prevState) => ({
                        ...prevState,
                        [w]: {
                            ...prevState[w],
                            errors:"",
                            values: e.target.value.trim().toLowerCase(),

                        }
                    }))

                    } 
                    return
                }

            else if (e.target.name === "password" || e.target.name === "confirmPassword") {

                if (!isValidPassword(e.target.value)) {
                    console.log("enter");
                    console.log("enter password" ,state.password);

                    setState((prevState) => ({
                        ...prevState,
                        [w]:{
                            ...prevState[w],
                            values: (e.target.value).trim().toLowerCase(),

                            errors: `you  cant  used  valid  ${e.target.name}   start  with  A-z more  than 7-15 char `
                    }}))

                    
                    return
                } 
                
                else {
                    setState((prevState) => ({
                        ...prevState,
                        [w]: {

                            ...prevState[w],
                        values: (e.target.value).trim().toLowerCase(),
                        errors:""


                        }
                    }))
                }
                return
            }

            else if (e.target.name === "fName" || e.target.name === "lName") {


                if (!isValidName(e.target.value)) {

                    setState((prevState) => ({
                        ...prevState,
                        [w]: {
                            ...prevState[w],
                            values: (e.target.value).trim().toLowerCase(),
                            errors: `you  cant  used  valid  ${e.target.name}  `
                        }


                    }))
                    return
                } else {
                    setState((prevState) => ({
                        ...prevState,
                        [w]: {
                            ...prevState[w],
                            errors: "",
                            values: (e.target.value).trim().toLowerCase(),

                        }
                    }))

                }
                return
            }
        
        return
    }




const handleClickWithCheackBox=(event:React.ChangeEvent<HTMLInputElement>)=>{
    return   setState2((perv)=>({ ...perv, checked: event.target.checked }))
}





  




    return (
        <Grid container className={classes.authWrapper}>
            <Grid container >
                <Container>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <Grid container justifyContent='center' alignItems='center' >
                                <Grid item justifyContent='center' alignItems='center'>
                                    <Grid item xs={8} className={classes.image} container justifyContent='center' alignItems='center'>
                                        <PersonIcon />
                                    </Grid>
                                    <Typography
                                        className={classes.welcome}
                                        gutterBottom
                                        variant={matchDownSM ? 'h3' : 'h2'}
                                    >
                                        Sign up

                                    </Typography>

                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={matchDownSM ? 0 : 2}>

                                    <Grid item xs={12} sm={6}>
                                        <InputController name={state.fName} type={'text'} onChange={handleChange}
                                            onBlur={handleOnBlur}
                                            onFocus={handleOnFocus}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>

                                        <InputController name={state.lName} type={'text'} onChange={handleChange}
                                            onBlur={handleOnBlur} onFocus={handleOnFocus}
                                        />

                                    </Grid>

                                    <InputController name={state.email} type={'email'} onChange={handleChange}
                                        onBlur={handleOnBlur} onFocus={handleOnFocus}
                                    />
                                   
                                    <InputController name={state.confirmEmail} type={'email'} onChange={handleChange}
                                        onBlur={handleOnBlur} onFocus={handleOnFocus}
                                    />
                                   
                                    <InputPasswordController name={state.password} showPassword={state2.showPassword}
                                        onChange={handleChange}
                                        onBlur={handleOnBlur}
                                        onFocus={handleOnFocus}
                                    />
                                    <InputPasswordController name={state.confirmPassword} showPassword={state2.showPassword2}
                                        onChange={handleChange}
                                        onBlur={handleOnBlurPassword}
                                        onFocus={handleOnFocus}
                                    />
                                    <InputController name={state.date} type={'date'} onChange={handleChangeWithDate}
                                        onBlur={handleOnBlur} onFocus={handleOnFocus}
                                    />
                                { state2.errors.length>2 && (
                                    <FormHelperText error >
                                        {' '}
                                        {state2.errors}{' '}
                                    </FormHelperText>
                                )}
                             <Grid direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                                        <Grid item xs={12} md={12} className={classes.terms} >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={state2.checked}
                                                        onChange={handleClickWithCheackBox}
                                                        name="checked"
                                                        color="primary"
                                                    />
                                                }
                                                label="Accepted terms and policies"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box mt={6}>
                                    <Button
                                        disableElevation
                                        disabled={state2.loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        className={classes.redButton}
                                    >
                                        {state2.loading ? "Sing up ...." : 'Sing up'}
                                    </Button>
                                </Box>
                            </form>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item container direction="column" alignItems="flex-end" xs={12}>
                                <Typography>
                                    Have an account?
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}