import { FC } from "react";

import GetSvg from "shared/components/GetSvg";
import { IAboutEventItemProps } from "types";

import s from './AboutEventItem.module.scss';

const AboutEventItem: FC<IAboutEventItemProps> = ({ imgPath, imgAlt, title, text, svgName, svgClassName }) => {
    return <div className={s.itemWrapper}>
        <img src={imgPath} alt={imgAlt} className={s.itemImage} />
        <h3 className={s.itemTitle}>{title}</h3>
        <p className={s.itemText}>{text}</p>
        <GetSvg name={svgName} className={svgClassName} />
    </div>
}

export default AboutEventItem;