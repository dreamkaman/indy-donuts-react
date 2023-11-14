import { ReactNode } from "react";

export interface IGetSvg {
    name: string;
    className: string;
}

export interface IButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
}

export interface ISectionProps {
    title: string,
    children: ReactNode
}