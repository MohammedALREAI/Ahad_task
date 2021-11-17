import React, { useContext, useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Box,
    Container,
    Button,
    Avatar,
    Divider,
    Grid,
    Typography,
} from '@material-ui/core';
import { isValidEmail, isValidPassword } from 'utils/isValidEmail';
import { InputController } from 'components/controll/Input';
import { CheckboxController } from 'components/controll/Checbox';
import { InputPasswordController } from 'components/controll/InputPassword';
import { useStyles } from './styles/loginStyles';
import { AuthContext, signIn } from 'context/auth';
import Link from '@material-ui/core/Link';
import { IStateInput } from './types/suginUp';

interface Props {

}




export const Login = (props: Props) => {

    const context = useContext(AuthContext);


    const classes = useStyles();

interface  IState{
email:IStateInput,
password:IStateInput,
errorLogin:string,
showPassword:boolean,
loading:boolean,
checked:boolean
}

    const [state, setState] = useState<IState>({
        email:{
        values: "",
        errors: "",
        label: "Email Address / Username",
        focus: true,
        touch: true,
        name: "email"
    },
    password:{
            values: "",
            errors: "",
            label: "password",
            focus: true,
            touch: true,
            name: "password"
           
    },

errorLogin:"",
showPassword:false,
loading:false,
checked:true

    })






    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setState((pre)=>({
            ...pre,
            loading:true
        }))
        if(state.email.values !== " " && isValidEmail(state.email.values) && state.password.values !==" " && isValidPassword(state.password.values) ){
            signIn(context.dispatch, { email: state.email.values, password: state.password.values })
        
        }
        else {
            setState((pre)=>({
                ...pre,
                errorLogin:"you should be  enter  valid email  or  Password"
            }))

        }

            return
    }



    /**
     * handleChangeEmail
     * @param e 
     */

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const  name =(e.target.name)as "email"|"password"
        if ( name==="email"){
            if(e.target.value.trim().toLowerCase() === ""){
                setState((pre)=>({
                    ...pre,
                    [name]:{
                        ...pre[name],
                        errors:"you  cant  used  empty  email"
                }}))}
                else if(!isValidEmail(e.target.value)){
                    setState((pre)=>({
                        ...pre,
                        [name]:{
                            ...pre[name],
                            errors:"that  cant success  to  format  error"
                    }}))
                    return
                }
                else {
                    setState((pre)=>({
                        ...pre,
                        [name]:{
                            ...pre[name],
                            values:e.target.value
                    }}))
                    return
                }

            }
            else if(e.target.name==="password"){
                if( (e.target.value).trim().toLowerCase() === " "){
                    setState((pre)=>({
                        ...pre,
                        [name]:{
                            ...pre[name],
                            errors:"you  cant  used  empty  password"
                    }}))
                    return             
                }
                else if(!isValidPassword(e.target.value)){
                    setState((pre)=>({
                        ...pre,
                        [name]:{
                            ...pre[name],
                            errors:"plaese  enter  vaalid  password"
                    }}))
                    return          

                }
                else {
                    setState((pre)=>({
                        ...pre,
                        [name]:{
                            ...pre[name],
                            values:e.target.value
                    }}))

                }



            }
   
        return
        
        }
    

      



    const handleOnBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
        const  name =(e.target.name)as "email"|"password"
        if (e.target.value === "") {
            setState((pre)=>({
                ...pre,
                [name]:{
                    ...pre[name],
                    focus: false

                }

            }))
           
        } else {

            setState((pre)=>({
                ...pre,
                [name]:{
                    ...pre[name],
                    touch: false

                }

            }))

        }
    }



   
    const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
        const name =(e.target.name)as "email"|"password"

        setState((pre)=>({
            ...pre,
            [name]:{
                ...pre[name],
                focus: true,
                touch: false
            }

        }))


    }


    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


    const  handleChecked=(event:React.ChangeEvent<HTMLInputElement>)=>{
        
        setState((pre)=>({
            ...pre,
           checked:event.target.checked

        }))
        return  
    }

    return (
        <Grid container className={classes.authWrapper}>
            <Grid container >
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                      
                        <Grid item xs={12}>
                            <Grid container justifyContent='center' alignItems='center' >
                                <Grid item justifyContent='center' alignItems='center'>
                                    <Grid item xs={8} className={classes.image} container justifyContent='center' alignItems='center'>
                                    <Avatar component={"feImage"}>
                            <LockOutlinedIcon />
                                    </Avatar>
                                    </Grid>
                                    <Typography
                                        className={classes.welcome}
                                    >
                                        Hi, Welcome Back
                                    </Typography>

                                    {state.errorLogin.length > 1 && (<Typography
                                        className={classes.signText}
                                    >
                                        {state.errorLogin}
                                    </Typography>
                                    )}


                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <form onSubmit={handleSubmit}>
                                <InputController name={state.email} type={'email'} onChange={handleChange}
                                    onBlur={handleOnBlur} onFocus={handleOnFocus}
                                />



                                <InputPasswordController name={state.password}
                                    showPassword={state.showPassword}
                                    onChange={handleChange}
                                    onBlur={handleOnBlur}
                                    onFocus={handleOnFocus}


                                />

                                <Grid direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" className={classes.forget}  >
                                        <Grid item xs={6} md={6}>
                                            <CheckboxController name={'checked'}
                                                onChange={handleChecked}
                                                checked={state.checked} label={'Remember me'} />

                                        </Grid>
                                        <Grid item xs={6} md={6} justifyContent='flex-end'>
                                            <Typography
                                                variant="subtitle1"
                                                color="secondary"
                                            >
                                                Forgot Password?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Box mt={2}>
                                    <Button
                                        disableElevation
                                        disabled={state.loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        className={classes.redButton}
                                    >
                                        {state.loading ?"Sign in  ...":"Sign in"}
                                    </Button>
                                </Box>



                            </form>
                        </Grid>
                            <Divider />
                        <Box mt={2}>
                            <Grid  alignItems="flex-end" xs={12}>
                                <Typography align='right' >
                                    Don't have an 
                                    <Link href="/suginup" onClick={preventDefault}  >account?</Link>
                                </Typography>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    )
}









