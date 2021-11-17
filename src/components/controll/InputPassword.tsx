import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton
} from "@material-ui/core";
import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles} from '@material-ui/core/styles';
import { IStateInput } from "Pages/Auth/types/suginUp";

interface Props {
  name: IStateInput;
  showPassword: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
}



const useStyles = makeStyles((theme) => ({
    authWrapper: {
        backgroundColor: 'white',
        minHeight: '90vh',
        width: '40%',
        margin: '0px auto',
        animation: '15s wings ease-in-out infinite',
        display: 'flex',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 35px 35px rgba(221, 198, 198, 0.25)',


    },
    welcome: {
        color: "rgb(103, 58, 183)",
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 700,
        fontFamily: 'Roboto, sans-serif',
        lineHeight: 1.2,
        marginBottom: '12px'

    },
    passwordRound: {
        borderRadius: '1px solid  red'
    },
    red: {
        background: 'red',

    },
    image: {
        display: 'flex',
        width: '100%',
        justifyContent: "center",
        alignContent: 'center',
        // background: 'red',
        margin: '20px',
        borderRadius: '50%',
        boxShadow: '0 35px 35px rgba(208, 160, 160, 0.25)'

    },
    sign: {
        margin: '0px',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'rgb(33, 33, 33)',
        fontFamily: 'Roboto, sans-serif',
        lineheight: 1.75,
        textAlign: "start"
    },
    redButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        outline: "0px",
        border: "0px",
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
        width: "100%",
        boxShadow: "none",
        fontWeight: 500,
        borderRadius: "4px",

        '&:hover': {
            backgroundColor: 'red'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    forget: {
        marginTop: '7px',
    },

    signDivider: {
        flexGrow: 1
    },

    signText: {
        cursor: 'unset',
        margin: '20px',
        padding: '5px 56px',
        borderColor: 'red',
        color: 'red !important',
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        marginTop: '20px'
    },
    iconShow: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: "0px",
        border: "0px",
        margin: "0px -12px 0px 0px",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        textDecoration: "none",
        textAlign: "center",
        flex: "0 0 auto",
        borderRadius: "50%",
        overflow: "visible",
        color: "rgba(0, 0, 0, 0.54)",
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "12px",
        fontSize: "1.75rem"
    },
    iconsShowWrapper: {
        // color:'#e8f0fe',
        background: '#e8f0fe'
    },

}));

export const InputPasswordController = ({
  name,
  onChange,
  onBlur,
  onFocus,
  showPassword,
}: Props) => {
  const [sPassword, setSPassword] = useState<boolean>(showPassword);
  const classes = useStyles();



  
  return (
    <FormControl
      fullWidth
      error={Boolean(name.errors.length > 1 && name.touch && name.focus)}
      className={classes.loginInput}
      variant="outlined"
    >
      <InputLabel htmlFor={name.label}>{name.label}</InputLabel>
      <OutlinedInput
        id={name.label}
        className={classes.passwordRound}
        type={sPassword ? "text" : "password"}
        name={name.name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        endAdornment={
          <InputAdornment position="end" className={classes.iconsShowWrapper}>
            <IconButton
              edge="end"
              onClick={()=>setSPassword(true)}
              onMouseDown={()=>setSPassword(false)}
            >
              {sPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={name.label}
      />
      {name.errors.length > 2 && (
        <FormHelperText  error> {name.errors} </FormHelperText>
      )}
    </FormControl>
  );
};
