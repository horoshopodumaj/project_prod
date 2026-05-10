import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    lazy?:boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { className, 
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const { theme } = useTheme();
    const {isClosing, isMounted, close} = useModal({
        onClose, 
        isOpen, 
        lazy, 
        animationDelay: 300})

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close}/>
                <div 
                    className={classNames(cls.content, {[cls.contentOpened]: isOpen}, [])} 
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
}