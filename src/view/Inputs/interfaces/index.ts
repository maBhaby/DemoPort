export interface IInput{
    name:string,
    type:string,
    label?:string,
    value:string,
    onChange?: () => void,
    erorr?:string,
    placeholder?:string
}