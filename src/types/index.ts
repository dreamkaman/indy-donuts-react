import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IGetSvg {
    name: string;
    className: string;
}

export interface IButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
}

export interface ISectionProps {
    children: ReactNode
}

export interface IReadMoreProps {
    isExtended: boolean,
    onClick: Dispatch<SetStateAction<boolean>>
}

export interface IParagraph {
    title: string,
    text: string;
}

export interface IPictureProps {
    imgPath: string;
    imgAlt: string;
}