import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';

import Section from 'shared/components/Section';
import Paragraph from 'shared/components/Paragraph';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import s from './Contact.module.scss';


const schema = yup
    .object({
        email: yup.string().email().required(),
        question: yup.string().required(),
    })
    .required()


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
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

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset();
    };

    return <Section id={'contacts'} className={s.contactSection}>
        <div className={s.contactSectionWrapper}>
            <Paragraph title={'Contact'} classNameTitle={s.contactSectionTitle} />
            <form className={s.contactForm} onSubmit={handleSubmit(onSubmit)}>
                <p className={s.contactFormTitle}>We will answer any question!</p>
                <Input inputName='email' placeholder={'Email'} inputType={'email'} register={register} />
                <Input inputName='question' placeholder={'Type your question'} register={register} />
                <Button text={'Send'} type={'submit'} />
            </form>
        </div>

    </Section>
}

export default Contact;