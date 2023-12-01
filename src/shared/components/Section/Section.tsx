import { FC } from "react";

import { ISectionProps } from "types";

import s from './Section.module.scss';

const Section: FC<ISectionProps> = ({ children, id, className = "" }) => {
    return <section id={id} className={className || s.section}>
        {children}
    </section>
}

export default Section;