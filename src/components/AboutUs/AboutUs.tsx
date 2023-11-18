import Paragraph from 'shared/components/Paragraph';
import Section from 'shared/components/Section';

import img from 'images/png/donut-set.png';
import Picture from 'shared/components/Picture/Picture';

import s from './AboutUs.module.scss';

const AboutUs = () => {
    const text = `Oh My Donut is the shop which adores tasty deserts and spend hours to create sophisticated donuts which will save the world!

                Eva has been baking since she was six years old and over the last 49 years, she has created hundreds of cakes for weddings and has baked for many celebrities. Eva and our shop have received multiple awards & recognition for excellence.

                We are going to teach you how to cook with passion and sparkles in your eyes! We love what we do and believe you will enjoy our cooking atmosphere!`

    return (
        <Section>
            <div className={s.pictureWrapper}>
                <Picture imgPath={img} imgAlt={'donuts set'} />
            </div>
            <Paragraph title={'About Us'} text={text} />
        </Section>
    );
};

export default AboutUs;
