
import { CellAsInput } from 'Pages/table/CellAsInput';
import {  useContext, useState } from 'react'
import { Button, CardContent, CardActions, Card, Divider, Grid, Box, Modal, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from 'context/auth';

const useStyles = makeStyles((theme) => ({
    wrapper: {

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
        zIndex: 100,
        position: "fixed",
        top: "50%",
        right: "50%",
        height: "300px",

        [theme.breakpoints.down('sm')]: {
            width: 320
        }
    },
    divider: {
        marginTop: "4px",
        marginBottom: "20px"
    },
    check: {
        fontSize: "55px",
        fill: "#37ad29",
        display: "flex",
        alignContent: "stretch",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px  auto"
    },
    headerTitle: {
        color: "#673ab7",
        fontFamily: "Roboto, sans-serif",
        fontSize: "24px",
        fontWeight: 700,

        height: "28px",
        lineHeight: "28.8px",
        margin: "0px 20px 20px",
        padding: "0px",
        textAlign: "center",
    },
    button: {
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
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        '&:hover': {
            backgroundColor: "green",


        }

    }
}));


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '1px solid gray',
    boxShadow: 24,
    p: 4,
    borderRadius: 6,
};

export  interface StateShape {
 readonly id:string,
    complicity: string
    deadLine: string,
    name: string
    offers: number
    price: number
    provider_imag:string,
    provider_name:string
    resources: string,
    start_data: string ,
    status: string,
    userId?:string
}

interface IActionRowModalProps{
    action:"add"|"update",
    data?:StateShape,
    isOpen:boolean,
    setIsOpen?: any

}


const AddRowModal = ({action,data,isOpen, setIsOpen}:IActionRowModalProps) => {

    
const context=useContext(AuthContext)
    const classes = useStyles();

  
    const [isError, setIsError] = useState<string>("")



    const [state, setstate] = useState<StateShape>({
        id:(action==="update" && data && data.id) ? data.id:"",
        complicity: (action==="update" && data && data.complicity) ? data.complicity:"",
        deadLine: (action==="update" && data && data.deadLine) ? data.deadLine:"",
        name: (action==="update" && data && data.name) ? data.name:"",
        offers: (action==="update" && data && data.offers) ? data.offers:0,
        price: (action==="update" && data && data.price) ? data.price:0,
        provider_imag: (action==="update" && data && data.provider_imag) ? data.provider_imag:"",
        provider_name: (action==="update" && data && data.provider_name) ? data.provider_name:"",
        resources: (action==="update" && data && data.resources) ? data.resources:"",
        start_data: (action==="update" && data && data.start_data) ? data.start_data:"",
        status: (action==="update" && data && data.status) ? data.status:"",
    })

    type TInput = "name" | "status" | "resources" | "price" | "provider_imag"|"provider_name" | "complicity" | "start_data" | "deadLine" | "image" | "offers"
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let name = (e.target.name) as TInput
        if(e.target.value ===" "){
            setIsError("There  is  some  error  in the  data  should  be  valid  plase  cheack  data")
            return   
        }

            setstate((pre) => ({
                ...pre,
                [name]:e.target.value
            
            }))
            return 

    }

    const  handleClose=()=>setIsOpen(false)


    const handleClick = async () => {
        console.log("sdljdkjsdkj");
        
        

        const  {name,start_data,status,price ,provider_imag,provider_name,resources,complicity,deadLine,offers}=state

        if(!name ||!start_data ||!status){
            console.log("hanha");
        
            return 
        }else {

        const  projectData={
            name,
            status,
            resources,
            price,
            provider_name,
            provider_imag,
            complicity,
            start_data,
            deadLine,
            offers
            ,userId:context.state.user?.id
                }


        if(action==="add"){
            console.log("test  log  of  add  ");
            
                    
        try {

            const createProject = await fetch(`http://localhost:3001/projects`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(projectData)
                }
            )

            await createProject.json()
            setIsOpen(false)
        } catch (e) {
            throw new Error(`throw  new  eror  to  add  project  to  the  application `)
        }
            
        }
        else{

            try {
                console.log("test  log  of  handleClick add 2 ssssss01221");

                const updatedProject = await fetch(`http://localhost:3001/projects/${state.id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: "PUT",
                        body: JSON.stringify(projectData)
                    }
                )
    
                const updatedData = (await updatedProject.json()) 
                console.log("updatedData",updatedData);
                
    
                setIsOpen(false);
            } catch (e) {
                throw new Error(`throw  new  eror  to  add  project  to  the  application `)
            }


        }}
    }


    return (

        <Modal open={isOpen} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <Card >

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={style}
                // className={classes.wrapper}
                >
                    <CardContent>

                        <Grid className={classes.PurpleCard} item>
                            <Typography className={classes.headerTitle}> {action==="add"?"Add ":" Update"}  Row To  Project</Typography>
                            <Divider className={classes.divider} />
                            <Grid item direction='row' container spacing={3}>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'id'}  isEditable={true} onChange={handleChange} label={'id'} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'name'} defaultValue={state.name} onChange={handleChange} label={'Name'} />
                                </Grid>
                                <Grid item md={3} xs={12}>

                                    <CellAsInput name={'status'} defaultValue={state.status} onChange={handleChange} label={'status'} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'resources'} defaultValue={state.resources} onChange={handleChange} label={'Resources'} />
                                </Grid>
                                <Grid item md={3} xs={12}>

                                    <CellAsInput name={'price'} defaultValue={state.price} onChange={handleChange} type="number" label={'price'} />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <CellAsInput  name={'provider_imag'} defaultValue={state.provider_imag} onChange={handleChange} label={'provider image'} />
                                    <CellAsInput name={'provider_name'} defaultValue={state.provider_name} onChange={handleChange} label={'provider name'} />
                                </Grid>

                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'complicity'} defaultValue={state.complicity} onChange={handleChange} label={'complicity'} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'start_data'} defaultValue={state.start_data} onChange={handleChange} type='date' label={'start data'} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'deadLine'} defaultValue={new Date(state.deadLine)} type='date' onChange={handleChange} label={'deadLine'} />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <CellAsInput name={'offers'} defaultValue={state.offers} onChange={handleChange} type='number' label={'offer'} />

                                </Grid>
                                <CardActions>
                                    <Button className={classes.button} onClick={handleClick}>{action==="add"?"Add ":" Update"}  YOUR Project</Button>
                                </CardActions>

                            </Grid>


                        </Grid>

                    </CardContent>
                </Box>
            </Card>

        </Modal>

    );
};

export default AddRowModal;
