import Paragraph from "shared/components/Paragraph";
import Section from "shared/components/Section";

import s from './Registration.module.scss';
import Input from "shared/components/Input";
import Button from "shared/components/Button";

const Registration = () => {
    return <Section className={s.registrationSection}>
        <Paragraph title={"Registration"} classNameTitle={s.registrationTitle} />
        <form className={s.registrationForm}>
            <div className={s.announceBlock}>
                <p className={s.eventTime}>May 23, 11:00</p>
                <p className={s.eventPlace}>New York</p>
                <p className={s.price}>$ 699</p>
            </div>
            <div className={s.inputsBlock}>
                <p className={s.inputsBlockTitle}>Apply your personal info for registration</p>
                <ul className={s.registrationInputsList}>
                    <li className={s.registrationInputWrapper}>
                        <Input inputName={'userName'} placeholder={'Your name'} />
                    </li>
                    <li className={s.registrationInputWrapper}>
                        <Input inputName={'phoneNumber'} placeholder={'Phone number'} />
                    </li>
                    <li className={s.registrationInputWrapper}>
                        <Input inputType={'email'} inputName={'email'} placeholder={'Email'} />
                    </li>
                </ul>
            </div>
            <Button text={"Register"} type={'submit'} />
        </form>

    </Section>
}

export default Registration;