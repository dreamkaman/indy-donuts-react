import GetSvg from "../GetSvg";

import s from './SocialBlock.module.scss';

const SocialBlock = () => {
    return <ul className={s.socialMediasList}>
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
}

export default SocialBlock;