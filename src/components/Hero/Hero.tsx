import Button from "shared/components/Button";
// import GetSvg from "shared/components/GetSvg";
import SocialBlock from "shared/components/SocialBlock";

import s from './Hero.module.scss';


const Hero = () => {
    return <div className={`${s.hero} ${s.mt} `}>
        <h1 className={s.heroTitle}>Donut Masterclass with the Donut King</h1>
        <p className={s.host}>Hosted by Eva Green</p>
        <div className={s.buttonWrapper}>
            <Button text={'Register'} />
        </div>
        <SocialBlock />
    </div>
}

export default Hero;