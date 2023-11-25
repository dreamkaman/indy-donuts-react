import { FC } from "react";

import { IInputProps } from "types";

import s from './Input.module.scss';

const Input: FC<IInputProps> = ({ inputType, placeholder, className }) => {
    return <input type={inputType} placeholder={placeholder} className={className || s.input} />
}

export default Input;