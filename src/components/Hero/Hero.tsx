import Button from "shared/components/Button";
import GetSvg from "shared/components/GetSvg";

import s from './Hero.module.scss';

const Hero = () => {
    return <div className={`${s.hero} ${s.mt} `}>
        <h1 className={s.heroTitle}>Donut Masterclass with the Donut King</h1>
        <p className={s.host}>Hosted by Eva Green</p>
        <div className={s.buttonWrapper}>
            <Button text={'Register'} />
        </div>
        <ul className={s.socialMediasList}>
            <li className={s.socialMediasListItem}>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <GetSvg name={'icon-twitter'} className={s.iconTwitter} />
                </a>
            </li>
            <li className={s.socialMediasListItem}>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <GetSvg name={'icon-instagram'} className={s.iconInstagram} />
                </a>
            </li>
            <li className={s.socialMediasListItem}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <GetSvg name={'icon-facebook'} className={s.iconFacebook} />
                </a>
            </li>
        </ul>
    </div>
}

export default Hero;