import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IGetSvg {
    name: string,
    className: string,
}

export interface IButtonProps {
    text: string,
    type?: "button" | "submit" | "reset",
}

export interface ISectionProps {
    children: ReactNode,
    className?: string
}

export interface IReadMoreProps {
    isExtended: boolean,
    onClick: Dispatch<SetStateAction<boolean>>
}

export interface IParagraph {
    title?: string,
    text?: string,
    classNameTitle?: string
}

export interface IPictureProps {
    imgPath: string,
    imgAlt: string,
}

export interface IAboutEventItemProps {
    imgPath: string,
    imgAlt: string,
    title: string,
    text: string,
    svgName: string,
    svgClassName: string
}

export interface ISliderProps {
    slides: slide[],
}

export interface slide {
    id: string,
    image: string,
    rating: number,
    name: string,
    feedback: string
}

export interface IRatingProps {
    rating: number,
}

export interface IInputProps {
    inputType?: string,
    placeholder: string,
    className?: string
}