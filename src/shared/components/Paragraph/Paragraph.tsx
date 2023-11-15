import { FC, useState } from "react";

import ReadMore from "../ReadMore";
import { IParagraph } from "types";

import s from "./Paragraph.module.scss";

const Paragraph: FC<IParagraph> = ({ text }) => {
    const [isExtended, setIsExtended] = useState(false);
    return <>
        <p className={s.mainText}>{text}</p>
        <ReadMore isExtended={isExtended} onClick={setIsExtended} />
    </>
}

export default Paragraph;