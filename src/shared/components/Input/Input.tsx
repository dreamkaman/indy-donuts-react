import { FC } from "react";

import { IInputProps } from "types";

import s from './Input.module.scss';

const Input: FC<IInputProps> = ({ inputType, inputName, placeholder, className, register }) => {
    return <input type={inputType} {...register(inputName)} placeholder={placeholder} className={className || s.input} />
}

export default Input;