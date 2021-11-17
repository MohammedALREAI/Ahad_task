
import { Button, Box, Grid, Typography } from '@material-ui/core';
import { activeUserById, AuthContext } from 'context/auth';
import { useStyles } from './styles/ConformEmail';
import {useContext} from'react'



const ConformEmail = () => {
    const classes = useStyles();
    const { dispatch } = useContext(AuthContext);

    const  handleClick=()=>{

        // window.location.pathname="/active/:id="
        const id = window.location.pathname.split('=')[1]
        activeUserById(dispatch,id)


    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            className={classes.wrapper}
        >
           <Grid className={classes.PurpleCard} >
               <Typography className={classes.headerTitle}> Active  your Account</Typography>
               <Button className={classes.button} onClick={handleClick}>ACTIVE  YOUR  ACCOUNT</Button>


           </Grid>
            </Box>

    );
};

export default ConformEmail;
