import { FormControlLabel,Checkbox } from '@material-ui/core'
import React from 'react'

export interface InputPropsCheckboxController{
    name:string,
    checked:boolean,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    label:string
    

    }

export const CheckboxController = ({name,checked,label,onChange}:InputPropsCheckboxController) => {
    return (
        <FormControlLabel
        control={
            <Checkbox
                checked={checked}
                onChange={onChange}
                name={name}
                color="primary"
            />
        }
        label={label}
    />
    )
}
