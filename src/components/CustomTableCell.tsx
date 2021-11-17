import { TableCell,Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DataShape } from "Pages/table/tablesData";
import { ChangeEvent } from "react";
import { createTrue } from "typescript";



const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: "20px",
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    },
    selectTableCell: {
      width: 60
    },
    tableCell: {
      width: 130,
      height: 40
    },
    input: {
      width: 130,
      height: 40
    }
  }));

  export type  TNameShape="id"| "name"|
  "status"|
  "resources"|
  "price"|
  "provider"|
  "complicity"|
  "start_data"|
  "deadLine"|
  "offers"|
  "author"|
  "isEditMode"
  interface  PropsCustomTableCell{
    row:DataShape,
    name:TNameShape
    onChange:(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,row:DataShape)=>void
  }
export  const CustomTableCell = ({ row, name, onChange }:PropsCustomTableCell) => {


    const classes = useStyles();
    const  isEditMode  = (row.isEditMode) as boolean 
    console.log("xxxxxxxxxxxxxxxxxxxxxxx",row);
    
    return (
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
            className={classes.input}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    );
  };