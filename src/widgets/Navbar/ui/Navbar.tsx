import React, { useCallback, useState } from 'react'
import { AppLink, Button, classNames } from 'shared'
import cls from './Navbar.module.scss'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'



interface INavbarProps {
    className?: string
}

export const Navbar = ({className}:INavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false)
    }, [dispatch])

    if(authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button 
                    theme={ButtonTheme.CLEAR_INVERTED} 
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>

        </div>
    )
}
