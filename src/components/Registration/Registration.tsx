import Paragraph from "shared/components/Paragraph";
import Section from "shared/components/Section";

import s from './Registration.module.scss';

const Registration = () => {
    return <Section className={s.registrationSection}>
        <Paragraph title={"Registration"} classNameTitle={s.registrationTitle} />
        <form className={s.registrationForm}>
            <div className={s.announceBlock}>
                <p>May 23, 11:00</p>
                <p>New York</p>
                <p>$ 699</p>
            </div>
            <div className={s.inputsBlock}>
                <p>Apply your personal info for registration </p>
                <input type="text" name="userName" placeholder="Your name" className={s.registrationInput} />
                <input type="text" name="phoneNumber" placeholder="Phone number" className={s.registrationInput} />
                <input type="text" name="email" placeholder="Email" className={s.registrationInput} />
            </div>
        </form>

    </Section>
}

export default Registration;