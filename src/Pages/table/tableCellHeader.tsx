import React from 'react'
import {
    TableCell
} from '@material-ui/core';
import { useStyles } from './styles/index.styles';
import { HeaderSort } from 'utils/SortItem';
interface Props {
    name:HeaderSort,
    onClick:(name:string)=>void,
}





export const TableCellHeader = ({name,onClick}: Props) => {

    const  classes=useStyles()
    return (
        <TableCell className={classes.tableHeadCell}  align="left" onClick={()=>onClick(name)} >{name}</TableCell>

    )
}
