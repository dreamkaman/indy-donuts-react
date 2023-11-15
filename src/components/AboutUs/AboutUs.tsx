import Paragraph from 'shared/components/Paragraph';
import Section from 'shared/components/Section';

import img from 'images/png/donut-set.png';

const AboutUs = () => {
    const text = `Oh My Donut is the shop which adores tasty deserts and spend hours to create sophisticated
                donuts which will save the world!
                Eva has been baking since she was six years old and over the last 49 years, she has created
                hundreds of cakes for weddings and has baked for many celebrities. Eva and our shop have
                received multiple awards & recognition for excellence.
                We are going to teach you how to cook with passion and sparkles in your eyes! We love what
                we do and believe you will enjoy our cooking atmosphere!`

    return (
        <Section title={'About Us'}>
            <img src={img} alt="" />
            <Paragraph text={text} />
        </Section>
    );
};

export default AboutUs;
