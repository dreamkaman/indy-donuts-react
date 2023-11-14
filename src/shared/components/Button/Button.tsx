import { FC } from 'react';

import { IButtonProps } from '../../../types';

import s from './Button.module.scss';

const Button: FC<IButtonProps> = ({ text, type = "button" }) => {
    return <button type={type} className={s.button}>{text}</button>
}

export default Button;