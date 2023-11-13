import { Link } from 'react-router-dom';

import GetSvg from 'shared/components/GetSvg';
import s from './Header.module.scss';


const Header = () => {
    return <div className={s.appHeader}>
        <GetSvg name={'icon-logo'} className={s.logo} />
        <GetSvg name={'icon-burger'} className={s.burgerMenu} />
        <nav>
            <ul className={s.menu}>
                <li>
                    <Link to={""}>About Us</Link>
                </li>
                <li>
                    <Link to={""}>Program</Link>
                </li>
                <li>
                    <Link to={""}>Reviews</Link>
                </li>
                <li>
                    <Link to={""}>Contacts</Link>
                </li>
            </ul>
        </nav>
    </div>;
};

export default Header;
