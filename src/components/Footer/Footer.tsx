import SocialBlock from "shared/components/SocialBlock";

import s from './Footer.module.scss';

const Footer = () => {
    return <div className={s.footer}>
        <SocialBlock />
        <div className={s.contactsBlock}>
            <p className={s.phone}>(910)222-8855</p>
            <p className={s.place}>New York</p>
        </div>
    </div>
}

export default Footer;