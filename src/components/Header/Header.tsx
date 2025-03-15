import { useState } from 'react';
import Modal from 'shared/components/Modal';
import GetSvg from 'shared/components/GetSvg';

import s from './Header.module.scss';



const Header = () => {
    const [isShown, setIsShown] = useState(false);

    const showModal = () => {
        setIsShown(!isShown);
    }
    return <>
        <div className={s.appHeader}>
            <GetSvg name={'icon-logo'} className={s.logo} />
            <div onClick={showModal}>
                <GetSvg name={'icon-burger'} className={s.burgerMenu} />
            </div>
            <nav>
                <ul className={s.menu}>
                    <li className={s.menuItem}>
                        <a href='#aboutUs'>About Us</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href='#program'>Program</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href='#reviews'>Reviews</a>
                    </li>
                    <li className={s.menuItem}>
                        <a href='#contacts'>Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
        {isShown && <Modal>
            <GetSvg name={'icon-logo'} className={s.logoModal} />
            <nav>
                <ul className={s.menuModal} >
                    <li onClick={showModal}>
                        <a href='#aboutUs' >About Us</a>
                    </li>
                    <li onClick={showModal}>
                        <a href='#program'>Program</a>
                    </li>
                    <li onClick={showModal}>
                        <a href='#reviews'>Reviews</a>
                    </li>
                    <li onClick={showModal}>
                        <a href='#contacts'>Contacts</a>
                    </li>
                </ul>
            </nav>
            <button type={'button'} className={s.closeModalButton} onClick={showModal}>
                <GetSvg name={'icon-close'} className={s.iconClose} />
            </button>
        </Modal>}
    </>
};

export default Header;
