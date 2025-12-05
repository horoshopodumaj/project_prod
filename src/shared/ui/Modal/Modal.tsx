import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
    const { className, 
        children,
        isOpen,
        onClose
    } = props;

    const timeRef = useRef<ReturnType <typeof setTimeout>>();
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(()=> {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(()=> {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return ()=> {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div 
                        className={classNames(cls.content, {[cls.contentOpened]: isOpen}, [])} 
                        onClick={ onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}