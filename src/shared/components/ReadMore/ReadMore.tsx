import { FC } from "react";

import { IReadMoreProps } from "types";

import s from './ReadMore.module.scss';

const ReadMore: FC<IReadMoreProps> = ({ isExtended, onClick }) => {
    const onClickHandler = () => {
        onClick(!isExtended);
    }
    return <button type="button" onClick={onClickHandler} className={s.readMoreBtn}>{isExtended ? 'Less' : 'Read more'}</button>
}

export default ReadMore;