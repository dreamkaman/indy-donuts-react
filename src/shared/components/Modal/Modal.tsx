import { FC } from "react";
import { createPortal } from "react-dom";

import { IModalProps } from "types";

import s from './Modal.module.scss';



const modalRoot = document.querySelector('#modal-root');

const Modal: FC<IModalProps> = ({ children }) => {
    return createPortal(<div className={s.modalBackDrop}>
        <div className={s.modalContent}>{children}</div>
    </div >, modalRoot);
}

export default Modal;