import { useForm, SubmitHandler } from "react-hook-form";

import Paragraph from "shared/components/Paragraph";
import Section from "shared/components/Section";
import Input from "shared/components/Input";
import Button from "shared/components/Button";

// import { IRegistrationInputs } from "types";


import s from './Registration.module.scss';


const Registration = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return <Section id={'registration'} className={s.registrationSection}>
        <div className={s.registrationSectionWrapper}>
            <Paragraph title={"Registration"} classNameTitle={s.registrationTitle} />
            <form className={s.registrationForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.announceBlock}>
                    <p className={s.eventTime}>May 23, 11:00</p>
                    <p className={s.eventPlace}>New York</p>
                    <p className={s.price}>$ 699</p>
                </div>
                <div className={s.inputsBlock}>
                    <p className={s.inputsBlockTitle}>Apply your personal info for registration</p>
                    <ul className={s.registrationInputsList}>
                        <li className={s.registrationInputWrapper}>
                            <Input inputName={'userName'} placeholder={'Your name'} register={register} />
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
        </div>

    </Section>
}

export default Registration;