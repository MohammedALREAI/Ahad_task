import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, CardContent, CardActions,Card, Divider,Icon , Grid,Box, IconButton, Modal, Typography, CardProps } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ClassNameMap } from '@material-ui/styles';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}


// style constant
const useStyles = makeStyles((theme) => ({
    wrapper:{
   
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animation: '15s wings ease-in-out infinite',
        animationDelay: '1s',

    
    },
    PurpleCard: {
        padding: "30px",


        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "none",
        backgroundImage: "none",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(144, 202, 249, 0.46)",
       
    },
    paper: {
        // position: 'realtive',
        maxWidth: 450,
        border: "4px solid rgba(144, 202, 249, 0.46)",
        padding: "30px",
        backgroundColor: "rgb(187, 30, 30)",
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "none",
        backgroundImage: "none",
        borderRadius: "12px",
        overflow: "hidden",
        transform: 'translate(-50%, -50%)',
        zIndex:100,
        position: "fixed",
        top:"50%",
        right:"50%",
        height: "300px",

        [theme.breakpoints.down('sm')]: {
            width: 320
        }
    },
    divider: {
        marginTop: "4px",
        marginBottom: "20px"
    },
    check:{
        fontSize: "55px",
        fill: "#37ad29",
        display: "flex",
        alignContent: "stretch",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px  auto"
    },
    headerTitle:{
        color: "#673ab7",
      fontFamily: "Roboto, sans-serif",
      fontSize: "24px",
      fontWeight: 700,

      height: "28px",
      lineHeight: "28.8px",
      margin: "0px 20px 20px",
      padding: "0px",
      textAlign:"center",
        },
        button:{
            backgroundColor: "red",
            color: "#ffffff",
            fontFamily: "Roboto, sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            minHeight: "42px",
            lineHeight: "26.25px",
            margin: "0px",
            padding: "8px 22px",
            minWidth: "427px",
            marginTop:"50px",
            display: "flex",
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center" ,
            '&:hover':{
                backgroundColor: "green",

                
            }
            
        }
}));


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:12,
  };
  

// modal content

export interface BodyProps extends CardProps {
    modalStyle?: React.CSSProperties;
    handleClose: () => void;
    classes?: ({ root?: string | undefined; paper?: string | undefined } & Partial<ClassNameMap<never>>) | undefined;
}


interface PropsSimpleModal {
    isOpen:boolean
}
export default function SimpleModal({isOpen}:PropsSimpleModal) {
    const classes = useStyles();


    const [open, setOpen] = useState<boolean>(isOpen);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

        <Modal  open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
         <Card>
         <Box
            
            
            display="flex"
            justifyContent="center"
            alignItems="center"
            // className={classes.wrapper}
        >
        <Box sx={style}>
               <Typography className={classes.headerTitle}> Delete  your Project</Typography>
               <Divider className={classes.divider} />
               <CheckCircleIcon className={classes.check}/>

               <Button className={classes.button} onClick={handleClose}>Close Model</Button>
           </Box >
            </Box>
            </Card> 
             
            </Modal> 
        
        </>
        
        
    );
}
