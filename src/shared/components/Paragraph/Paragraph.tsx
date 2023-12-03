import { FC, useState } from "react";

import ReadMore from "../ReadMore";
import { IParagraph } from "types";

import s from "./Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({ title = '', text = '', classNameTitle = '' }) => {
    const [isExtended, setIsExtended] = useState(false);

    return <div className={classNameTitle || s.textPart}>
        <h2 className={s.title}>{title}</h2>
        <p className={`${s.mainText} ${!isExtended && s.less}`}>{text}</p>
        {text && <ReadMore isExtended={isExtended} onClick={setIsExtended} />}
    </div>
}

export default Paragraph;