import { makeStyles } from '@material-ui/core/styles';

export  const useStyles = makeStyles((theme) => ({
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
    headerTitle:{
    color: "#673ab7",
  fontFamily: "Roboto, sans-serif",
  fontSize: "24px",
  fontWeight: 700,
  height: "28px",
  lineHeight: "28.8px",
  margin: "0px 0px 8.4px",
  padding: "0px",
  textAlign:"center",
    },
    button:{
        backgroundColor: "#5e35b1",
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
        alignItems:"center"
        
    }

}));