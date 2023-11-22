import { FC, useState } from "react";

import ReadMore from "../ReadMore";
import { IParagraph } from "types";

import s from "./Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({ title = '', text = '', classNameTitle = '' }) => {
    const [isExtended, setIsExtended] = useState(false);
    return <div className={s.textPart}>
        <h2 className={classNameTitle || s.title}>{title}</h2>
        <p className={s.mainText}>{text}</p>
        {text && <ReadMore isExtended={isExtended} onClick={setIsExtended} />}
    </div>
}

export default Paragraph;