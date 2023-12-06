import { useEffect } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';

import Paragraph from "shared/components/Paragraph";
import Section from "shared/components/Section";
import Input from "shared/components/Input";
import Button from "shared/components/Button";

import { IRegistrationInputs } from "types";

import s from './Registration.module.scss';

const schema = yup
    .object({
        userName: yup.string().required(),
        phoneNumber: yup.string().required().matches(/[0-9]{12}/, 'phone number consist of 12 numbers!'),
        email: yup.string().email().required(),
    })
    .required()


const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    useEffect(() => {
        Object.keys(errors).forEach(key => {
            toast.error(errors[key].message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            })
        })
    }, [errors]);

    const onSubmit: SubmitHandler<IRegistrationInputs> = (data, event) => {
        console.log(data)
        event.target.reset();
    };



    return <Section id={'registration'} className={s.registrationSection}>
        <div className={s.registrationSectionWrapper}>
            <Paragraph title={"Registration"} classNameTitle={s.registrationTitle} />
            <form className={s.registrationForm} onSubmit={handleSubmit(onSubmit)} >
                <div className={s.announceBlock}>
                    <p className={s.eventTime}>May 23, 11:00</p>
                    <p className={s.eventPlace}>New York</p>
                    <p className={s.price}>$ 699</p>
                </div>
                <div className={s.inputsBlock}>
                    <p className={s.inputsBlockTitle}>Apply your personal info for registration</p>
                    <ul className={s.registrationInputsList}>
                        <li className={s.registrationInputWrapper}>
                            <Input inputName='userName' placeholder={'Your name'} register={register} />
                        </li>
                        <li className={s.registrationInputWrapper}>
                            <Input inputName='phoneNumber' placeholder={'Phone number'} register={register} />
                        </li>
                        <li className={s.registrationInputWrapper}>
                            <Input inputType='email' inputName={'email'} placeholder={'Email'} register={register} />
                        </li>
                    </ul>
                </div>
                <Button text={"Register"} type={'submit'} />
            </form>
        </div>

    </Section>
}

export default Registration;