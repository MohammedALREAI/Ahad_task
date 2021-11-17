import { TableCell, TableRow } from '@material-ui/core';
import { StateShape } from 'components/AddRow';
import { ThreeDotsMenu } from 'components/threeDot';

import React, { FC } from 'react'
import { useStyles } from './styles/renderRow.style';

interface Props {
    data: StateShape ,
    handleWithDelateClick:(id:string)=>Promise<void>,
    handleWithEditClick:(data:StateShape)=>Promise<void>
}








export const RenderRow: FC<Props> = ({data,handleWithDelateClick,handleWithEditClick}) => {

  const  { id, name, status, resources, price, provider_imag,provider_name, complicity, start_data, deadLine, offers }=data
    const classes = useStyles()
    const colorDot = status === "In Review" ? "#993a43" : status === "Design" ? "#456f9c" : "#5a478c"
    const colorDiv = status === "In Review" ? "#94e5cc" : status === "Design" ? "#aafafd" : "#a4fbc1"




    return (
      
        <TableRow hover className={classes.root}>
            <TableCell component="th" scope="row">{id}</TableCell>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell className={classes.status} component="th" scope="row">
                <div className={classes.span} style={{
                    background: colorDot
                }} /><div className={classes.statusInner} style={{
                    background: colorDiv

                }}>
                    {status}</div>

            </TableCell>
            <TableCell component="th" scope="row">{resources}</TableCell>
            <TableCell component="th" scope="row">${price}k</TableCell>
            <TableCell component="th" scope="row" colSpan={2}>
                <div className={classes?.provider}>
                    {provider_imag && <img className={classes.imag} src={provider_imag} alt={provider_name} /> }
                    {provider_name ? <span>{provider_name}</span> : '-'}</div>
            </TableCell>
            <TableCell component="th" scope="row">{complicity}</TableCell>
            <TableCell component="th" scope="row">{start_data}</TableCell>
            <TableCell component="th" scope="row">{deadLine}</TableCell>
            <TableCell component="th" scope="row">{offers}</TableCell>
            <TableCell component="th" scope="row">



                <ThreeDotsMenu  id={id} handleWithDelateClick={() => handleWithDelateClick(id)} handleWithEditClick={()=>handleWithEditClick(data)}/>
            </TableCell>
        </TableRow>

    )
}
