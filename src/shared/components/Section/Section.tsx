import { FC, ReactNode } from "react";

interface ISectionProps {
    title: string,
    children: ReactNode
}
const Section: FC<ISectionProps> = ({ title, children }) => {
    return <section>
        <h2>{title}</h2>
        {children}
    </section>
}

export default Section;