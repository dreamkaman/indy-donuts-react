import { FC, useState } from "react";

import { ISliderProps } from "types";

import s from './Slider.module.scss';
import Rating from "../Rating";


const Slider: FC<ISliderProps> = ({ slides }) => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const slidesCount = slides.length;

    const previousPosition = currentPosition > 0 ? currentPosition - 1 : slidesCount - 1;

    const nextPosition = currentPosition < slidesCount - 1 ? currentPosition + 1 : 0;

    const increment = () => {
        currentPosition < slidesCount - 1 ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0)
    }

    const decrement = () => {
        currentPosition > 0 ? setCurrentPosition(currentPosition - 1) : setCurrentPosition(slidesCount - 1)
    }

    return <div className={s.slider}>
        <ul className={s.reviewsBlock}>
            <li key={slides[previousPosition].id} className={`${s.reviewItem} ${s.reviewItemSecondary}`}>
                <img src={slides[previousPosition].image} alt={slides[previousPosition].name} className={s.reviewItemImage} />
                <div className={s.reviewItemRating}>{slides[previousPosition].rating}</div>
                <p>{slides[previousPosition].name}</p>
            </li>
            <li key={slides[currentPosition].id} className={`${s.reviewItem} ${s.reviewItemMain}`}>
                <img src={slides[currentPosition].image} alt={slides[currentPosition].name} className={s.reviewItemImage} />
                <Rating rating={slides[currentPosition].rating} />
                <p className={s.reviewItemName}>{slides[currentPosition].name}</p>
                <p className={s.reviewItemFeedback}>{slides[currentPosition].feedback}</p>
            </li>
            <li key={slides[nextPosition].id} className={`${s.reviewItem} ${s.reviewItemSecondary}`}>
                <img src={slides[nextPosition].image} alt={slides[nextPosition].name} className={s.reviewItemImage} />
                <div className={s.reviewItemRating}>{slides[nextPosition].rating}</div>
                <p>{slides[nextPosition].name}</p>
            </li>
        </ul>
        <div className={s.buttonsBlock}>
            <button type="button" onClick={decrement}>Back</button>
            {<p className={s.sliderIndicator}>{`${currentPosition + 1}/${slidesCount}`}</p>}
            <button type="button" onClick={increment}>Next</button>
        </div>


    </div >
}

export default Slider;