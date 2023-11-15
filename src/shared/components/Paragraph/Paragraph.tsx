import { FC, useState } from "react";

import ReadMore from "../ReadMore";
import { IParagraph } from "types";

import s from "./Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({ title, text }) => {
    const [isExtended, setIsExtended] = useState(false);
    return <div className={s.textPart}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.mainText}>{text}</p>
        <ReadMore isExtended={isExtended} onClick={setIsExtended} />
    </div>
}

export default Paragraph;