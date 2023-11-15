import { FC } from "react";

import { ISectionProps } from "types";

import s from './Section.module.scss';

const Section: FC<ISectionProps> = ({ title, children }) => {
    return <section className={s.section}>
        <h2 className={s.title}>{title}</h2>
        {children}
    </section>
}

export default Section;