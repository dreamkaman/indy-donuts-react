import { FC } from "react";

import { IPictureProps } from "types";

import s from './Picture.module.scss';

const Picture: FC<IPictureProps> = ({ imgPath, imgAlt }) => {
    return <img src={imgPath} alt={imgAlt} className={s.picture} />
}

export default Picture;