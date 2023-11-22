import { FC, PropsWithChildren } from 'react';

import s from './HomePage.module.scss';

const HomePage: FC<PropsWithChildren> = ({ children }) => {


    return <div className={`container ${s.homePage}`} >
        {children}
    </div >
}

export default HomePage;
