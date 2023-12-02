import { FC } from "react";

import { ILinkButtonProps } from "types";

import s from './LinkButton.module.scss';

const LinkButton: FC<ILinkButtonProps> = ({ path, text }) => {
    return <a href={path} className={s.linkButton}>{text}</a>
}

export default LinkButton;