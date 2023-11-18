import AboutEventItem from './AboutEventItem';

import donut1 from 'images/png/donut-1.png';
// import donut2 from 'images/png/donut-2.png';
// import donut3 from 'images/png/donut-3.png';
// import donut4 from 'images/png/donut-4.png';

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
            imgAlt=''
            imgPath=''
            title=''
            text=''
            svgName=''
            svgClassName=''
        />
        <AboutEventItem
            imgAlt=''
            imgPath=''
            title=''
            text=''
            svgName=''
            svgClassName=''
        />
        <AboutEventItem
            imgAlt=''
            imgPath=''
            title=''
            text=''
            svgName=''
            svgClassName=''
        />
    </div>
}

export default AboutEventList;