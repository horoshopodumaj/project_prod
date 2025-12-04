import React, { useCallback, useState } from 'react'
import { AppLink, Button, classNames } from 'shared'
import cls from './Navbar.module.scss'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ButtonTheme } from 'shared/ui/Button/Button'


interface INavbarProps {
    className?: string
}

export const Navbar = ({className}:INavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev)=> !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}> 
                {/* eslint-disable-next-line */}
                {t("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem doloribus natus odio, veritatis debitis necessitatibus provident, quisquam alias dolor beatae tenetur voluptas voluptatem dolorem numquam consequuntur? Maiores, quas reprehenderit?")}
            </Modal>

        </div>
    )
}
