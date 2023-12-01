import Section from "shared/components/Section";
import Slider from "shared/components/Slider";

import { slides } from 'mokeData/reviews';
import Paragraph from "shared/components/Paragraph";

import s from './Reviews.module.scss';

const Reviews = () => {
    return <Section id={'reviews'} className={s.reviewSection}>
        <Paragraph title={'Review'} classNameTitle={s.title} />
        <Slider slides={slides} />
    </Section>
}

export default Reviews;