import Section from 'shared/components/Section';
import Paragraph from 'shared/components/Paragraph';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import s from './Contact.module.scss';


const Contact = () => {
    return <Section>
        <Paragraph title={'Contact'} />
        <form className={s.contactForm}>
            <p className={s.contactFormTitle}>We will answer any question!</p>
            <Input inputName={'email'} placeholder={'Email'} inputType={'email'} />
            <Input inputName={'question'} placeholder={'Type your question'} />
            <Button text={'Send'} type={'submit'} />
        </form>
    </Section>
}

export default Contact;