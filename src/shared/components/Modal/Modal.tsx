import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import s from './Modal.module.scss';


const modalRoot = document.querySelector('#modal-root');

interface IModalProps {
    children?: ReactNode;
}

const Modal: FC<IModalProps> = ({ children }) => {
    return createPortal(<div className={s.modalBackDrop}>
        <div className={s.modalContent}>{children}</div>
    </div >, modalRoot);
}

export default Modal;