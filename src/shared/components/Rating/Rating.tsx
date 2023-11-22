import { FC } from "react";
import GetSvg from "../GetSvg";

import { IRatingProps } from "types";

import s from './Rating.module.scss';


const Rating: FC<IRatingProps> = ({ rating }) => {
    switch (rating) {
        case 5:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
            </div>;
        case 4:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
            </div>;
        case 3:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
            </div>;
        case 2:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
            </div>;
        case 1:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
            </div>;
        default:
            return <div className={s.ratingBlock}>
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
                <GetSvg name={"icon-star-empty"} className={s.iconStar} />
            </div>;
    }
}

export default Rating;