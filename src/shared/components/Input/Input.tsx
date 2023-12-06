import { FieldValues } from "react-hook-form";

import { IInputProps } from "types";

import s from './Input.module.scss';


const Input = <T extends FieldValues>({ inputType, inputName, placeholder, className, register }: IInputProps<T>) => {
    return <input type={inputType} {...register(inputName, { required: true })} placeholder={placeholder} className={className || s.input} />
}

export default Input;