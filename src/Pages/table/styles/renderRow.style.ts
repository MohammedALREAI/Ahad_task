import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({

    root: {

        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(144, 202, 249, 0.46)",
        th: {

            letterSpacing: "0em",
            fontWeight: 400,
            lineHeight: "1.5em",
            color: "rgb(97, 97, 97)",
            fontFamily: "Roboto, sans-serif",
            fontSize: "0.875rem",
            verticalAlign: "inherit",
            padding: "16px",
            borderTopColor: "rgb(238, 238, 238)",
            borderRightColor: "rgb(238, 238, 238)",
            borderLeftColor: "rgb(238, 238, 238)"
        }

    },


    cillBorder:{
  borderRight: "5px solid red",
  background: "inherit",
  padding: "0px",
  margin: "0px  0px",
  paddingInline: "9px !important",
  paddingBlock: "0px",
  letterSpacing: "0em",
  fontWeight: 400,
  lineHeight: "0em",
  color: "rgb(97, 97, 97)",
  fontFamily: "Roboto, sans-serif",
  fontSize: "0.875rem",
  verticalAlign: "inherit",
  borderTopColor: "rgb(238, 238, 238)",
  borderRightColor: "rgb(238, 238, 238)",
  borderLeftColor: "rgb(238, 238, 238)"

    },

    imag: {
        width: "40px",
        height: "40px",

    },

    span: {
        borderRadius: "50%",
        backgroundColor: "#993a43",
        width: "12px",
        height: "12px",
        justifyContent: "center",

        marginRight: "10px",
        //  paddingRight:"10px"
    },
    status: {
        display: "flex",
        alignItems: "center",
            fontFamily: "Roboto, sans-serif",
            justifyContent: "center",
            cursor: "default",
            outline: "0px",
            textDecoration: "none",
            verticalAlign: "middle",
            border:'none'
    
    },
    statusInner: {
        background: 'red',
        opacity: '0.7',
        padding: '5px',
        textAlign: "center",
        color: 'rgb(103, 58, 183)',
        width: "100%"

    },
    provider: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    },
    gray: {
        background: "rgba(156, 163, 175)"
    },
    my: {
        background: "#993a43"
    },
    acquired: {
        background: "#446f9c"
    },
    saved: {
        background: "#665571"
    }

});