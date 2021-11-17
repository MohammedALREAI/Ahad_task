export interface IStateInput {
    values: string,
    errors: string,
    focus?: boolean,
    touch?: boolean,
    label: string,
    name: string



}


export type T = "email" |
    "password" |
    "confirmEmail" |
    "confirmPassword" |
    "fName" |
    "lName" |
    "date"



    export interface IShape{
        
            email: IStateInput,
            password: IStateInput,
            confirmEmail: IStateInput,
            confirmPassword: IStateInput,
            fName: IStateInput,
            lName: IStateInput,
            date: IStateInput,

        
    }