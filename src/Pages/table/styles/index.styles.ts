import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

    root:{
        flexGrow: 1,
        background: "#eceef3",
        // height: "auto",
        // minHeight:"120px"
    },
    seachText:{
        border: "2px  solid #97989b",
        borderRadius: "0",
        outline: "none",
        background: "#eceff3",
        cursor: "pointer",
        height: "100%",

    },

        buttonWrapper:{
            "display": "flex",
            "flexWrap": "wrap",
            "justifyContent": "flex-end"
          },

    SerachWithButton:{
        alignItems:"center",
        display: "flex",
        marginTop:"10px", 
        justifyContent:"center"      

    },
    table: {
        padding: ' 0px 20px',
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
    },
    Serach: {
        width: "70%"
    },
    iconsShowWrapper: {
        // color:'#e8f0fe',
        background: '#e8f0fe'
    },
    borderLine: {
        border: "2px  solid #97989b",
        borderRadius: "0",
        outline: "none",
        background: "#eceff3",
        cursor: "pointer",


    },

    container:{
        // marginTop:"40px",
        background: "white",
        marginTop:"40px"

    },

    BoxModel:{
        zIndex:100,
        position: "fixed",
        top:"50%",
        right:"50%",
        display: "flex",
        maxWidth:"300px",
        height: "300px",
            
    },

    searchWrapper:{
        border: "1px solid #97989b",
        padding: "0px  10px",
        outline: "none",
        cursor: "pointer",
        borderRadius: "0",
        height: "100% !important",

        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        "width": "auto",
        "minHeight": "40px",
        "borderWidth": "2px",
        "borderColor": "rgba(156, 163, 175, 7)",
        "minWidth": "100px",
        "background": "inherent",
        "margin": "0px 10px",

      "&:hover": {
        "backgroundColor": "rgba(218, 226, 237)"
      }
 
    },
    wrapperButton:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0px  auto',
        display: "flex",
        color:"#5d5d5f",
        textTransform:"capitalize"

        
    },

      tableHeadCell: {
        background: "#5c8bc5",
        "&, &$tableCell": {
          // fontSize: "1em",
          color:"white"
        }
      },
      tableCell: {
        // lineHeight: "1.42857143",
        padding: "2px",
        verticalAlign: "middle",
        fontSize: "0.8125rem"
      },
      tableResponsive: {
        width: "100%",
        marginTop: "18px",
        // overflowX: "auto"
      },
      wrapperHeaderTitle:{
        padding:"20px",
        // margin:"0px 40px",


      },
      tableHeadRow: {
        height: "56px",
        color: "inherit",
        display: "table-row",
        outline: "none",
        verticalAlign: "middle",
        marginTop: "18px",

      },
      tableBodyRow: {
        height: "48px",
        color: "inherit",
        outline: "none",
        verticalAlign: "middle"
      },

    buttonItem:{
       
        WebkitTapHighlightColor: "transparent",
        border: "1px",
        margin: "0px",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        textDecoration: "none",
        textTransform: "capitalize",
        fontFamily: "Roboto, sans-serif",
        fontSize: "0.9375rem",
        lineHeight: 1.75,
        minWidth: "64px",
        padding: "8px 22px",
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(103, 58, 183)",
        boxShadow: "none",
        fontWeight: 500,
        borderRadius: "4px",

        '&:hover': {
            backgroundColor: 'red'
        },
       
    },

    createProject:{
      "color": "white",
      "width": "auto",
      "height": "auto",
      "margin": "0px 10px",
      "display": "flex",
      "background": "#5c8bc5",
      "boxSizing": "border-box",
      "minHeight": "40px",
      "alignItems": "center",
      "borderRadius": "1px",
      "justifyContent": "center",
      "fontWeight": 600
    },
    wrapperButtonHeader:{

      "justifyContent": "end",
      "display": "flex"
    },
    dots:{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        margin: "0px 12px"
      },
      buttonItemWithsDot: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        "width": "auto",
        "height": "auto",
        "minHeight": "40px",
        "borderWidth": "2px",
        "borderColor": "rgba(156, 163, 175, 7)",
        "borderRadius": "3px",
        "background": "#eceef3",
        "margin": "0px 10px"
      },
      "hover": {
        "backgroundColor": "rgba(218, 226, 237)"
      }
      ,
      gray:{
         background:"rgba(156, 163, 175)"
      },
      my:{
         background:"#993a43"
      },
      acquired:{
        background:"#446f9c"
      },
      saved:{
          background: "#665571"
      },
      

});
