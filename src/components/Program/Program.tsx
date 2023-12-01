import AboutEventList from "components/AboutEventList";
import Paragraph from "shared/components/Paragraph";
import Section from "shared/components/Section";

const Program = () => {
    const text = `Indulge in this immersive sweet treat experience with The Chef Donut Queen in her New York donut shop!

    > A stand up history of donuts

    > Make 3 donut flavors of your choice

    > Enjoy all-you-can-eat donuts

    > Cocktail pairings and coffee included

    > Photo session by professional photographer

    > Secret receipt of cooking from Eva

    > All products are included in the price

    Come with your dear people and friends and you will spend an unforgettable time and will become a real professional in donuts cooking!
    `;
    return <Section id={'program'}>
        <Paragraph title={'Program'} text={text} />
        <AboutEventList />
    </Section>
}

export default Program;