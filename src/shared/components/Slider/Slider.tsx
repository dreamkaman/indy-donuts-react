import { FC, useState } from "react";

import s from './Slider.module.scss';

interface ISliderProps {
    slides: slide[];
};

interface slide {
    id: string,
    image: string,
    rate: number,
    name: string,
    feedback: string
}

const Slider: FC<ISliderProps> = ({ slides }) => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const slidesCount = slides.length;
    console.log(slidesCount);
    return <div>
        <div className={s.buttonsBlock}>
            <button type="button">Next</button>
            <button type="button">Back</button>
        </div>


    </div >
}

export default Slider;