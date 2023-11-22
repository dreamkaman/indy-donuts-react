import Section from "shared/components/Section";
import Slider from "shared/components/Slider";

import { slides } from 'mokeData/reviews';

const Reviews = () => {
    return <Section>
        <Slider slides={slides} />
    </Section>
}

export default Reviews;