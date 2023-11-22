import { FC, useState } from "react";

import { ISliderProps } from "types";

import s from './Slider.module.scss';


const Slider: FC<ISliderProps> = ({ slides }) => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const slidesCount = slides.length;

    const previousPosition = currentPosition > 0 ? currentPosition - 1 : slidesCount - 1;

    const nextPosition = currentPosition < slidesCount - 1 ? currentPosition + 1 : 0;

    const { id, image, rating, name, feedback } = slides[currentPosition];

    const increment = () => {
        currentPosition < slidesCount - 1 ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(0)
    }

    const decrement = () => {
        currentPosition > 0 ? setCurrentPosition(currentPosition - 1) : setCurrentPosition(slidesCount - 1)
    }

    return <div className={s.slider}>
        <ul className={s.reviewsBlock}>
            <li key={slides[previousPosition].id} className={s.reviewItem}>
                <img src={slides[previousPosition].image} alt={slides[previousPosition].name} className={s.reviewItemImage} />
                <div className={s.reviewItemRating}>{slides[previousPosition].rating}</div>
                <p>{slides[previousPosition].name}</p>
                <p>{slides[previousPosition].feedback}</p>
            </li>
            <li key={id} className={s.reviewItem}>
                <img src={image} alt={name} className={s.reviewItemImage} />
                <div className={s.reviewItemRating}>{rating}</div>
                <p>{name}</p>
                <p>{feedback}</p>
            </li>
            <li key={slides[nextPosition].id} className={s.reviewItem}>
                <img src={slides[nextPosition].image} alt={slides[nextPosition].name} className={s.reviewItemImage} />
                <div className={s.reviewItemRating}>{slides[nextPosition].rating}</div>
                <p>{slides[nextPosition].name}</p>
                <p>{slides[nextPosition].feedback}</p>
            </li>
        </ul>
        <div className={s.buttonsBlock}>
            <button type="button" onClick={decrement}>Back</button>
            {<p>{`${currentPosition + 1}/${slidesCount}`}</p>}
            <button type="button" onClick={increment}>Next</button>
        </div>


    </div >
}

export default Slider;