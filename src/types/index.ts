import { Dispatch, ReactNode, SetStateAction } from "react";
import { Path, UseFormRegister } from "react-hook-form";

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
    id: string,
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type IInputProps<T> = {
    inputType?: string,
    inputName: Path<T>,
    placeholder: string,
    className?: string,
    register: UseFormRegister<T>;
}

export interface IModalProps {
    children: ReactNode;
}

export interface ILinkButtonProps {
    path: string,
    text: string
}

export interface IRegistrationInputs {
    'userName': string;
    'phoneNumber': string;
    'email': string
}

export interface IContactFormInputs {
    'email': string,
    'question': string
}

