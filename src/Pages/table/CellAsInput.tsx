import React from 'react'
import {TextField , Grid } from '@material-ui/core';




interface  shape{
        image:string,
        name:string
    
}
interface Props {
    name:string,
    onChange:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void,
    label:string,
    value?:string,
    isEditable?:boolean,
    defaultValue?:string|number | Date |shape,
    colSpan?:number,
    type?:string
    
}


export const CellAsInput = ({name,label,onChange,isEditable,defaultValue="",type="text"}: Props) => {








              

    return (

        <Grid>
        <TextField
            InputLabelProps={{ shrink: true }}
            required
        
        disabled={isEditable} type={type} label={label} name={name} onChange={onChange} defaultValue={defaultValue} />
           
        </Grid>

    )
}
