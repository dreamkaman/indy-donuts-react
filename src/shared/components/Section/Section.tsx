import { FC } from "react";

import { ISectionProps } from "types";

import s from './Section.module.scss';

const Section: FC<ISectionProps> = ({ children, className = "" }) => {
    return <section className={className || s.section}>
        {children}
    </section>
}

export default Section;