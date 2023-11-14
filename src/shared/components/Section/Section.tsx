import { FC } from "react";

import { ISectionProps } from "types";

import s from './Section.module.scss';

const Section: FC<ISectionProps> = ({ title, children }) => {
    return <section className={s.section}>
        <h2 >{title}</h2>
        {children}
    </section>
}

export default Section;