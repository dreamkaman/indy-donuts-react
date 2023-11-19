import AboutEventItem from './AboutEventItem';

import donut1 from 'images/png/donut-1.png';
import donut2 from 'images/png/donut-2.png';
import donut3 from 'images/png/donut-3.png';
import donut4 from 'images/png/donut-4.png';

import s from './AboutEventList.module.scss';

const AboutEventList = () => {
    return <div className={s.aboutEventList}>
        <AboutEventItem
            imgAlt={'donut'}
            imgPath={donut1}
            title={'Type of the event'}
            text={'Cooking classes'}
            svgName={'icon-chef-hat'}
            svgClassName={s.chefHat}
        />
        <AboutEventItem
            imgAlt={'donut'}
            imgPath={donut2}
            title='Number of guests'
            text='1 to 20'
            svgName={'icon-people'}
            svgClassName={s.iconPeople}
        />
        <AboutEventItem
            imgAlt={'donut'}
            imgPath={donut3}
            title={'Time of the event'}
            text={'18:30 (2.5 hours)'}
            svgName={'icon-clock'}
            svgClassName={s.iconClock}
        />
        <AboutEventItem
            imgAlt={'donut'}
            imgPath={donut4}
            title={'The host speaks'}
            text={'English, French'}
            svgName={'icon-chat'}
            svgClassName={s.iconChat}
        />
    </div>
}

export default AboutEventList;