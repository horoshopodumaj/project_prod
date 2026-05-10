import React, { memo, useCallback, useState } from 'react'
import { AppLink, Button, classNames, HStack, Text } from 'shared'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { TextTheme } from 'shared/ui/Text/Text'
import { NotificationButton } from 'features/notificationButton'
import { AvatarDropdown } from 'features/avatarDropdown'

interface INavbarProps {
    className?: string
}

export const Navbar = memo(({className}:INavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData)

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if(authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text 
                    theme={TextTheme.INVERTED}
                    className={cls.appName} 
                    title={t('Diana App')}/>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                    to={RoutePath.article_create}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap='16' className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
                
            </header>
        )
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
            )}
        </header>
    )
})

Navbar.displayName = 'Navbar'; 
export default Navbar;
