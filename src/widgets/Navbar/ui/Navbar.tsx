import React, { memo, useCallback, useState } from 'react'
import { AppLink, Button, classNames, Dropdown, Text } from 'shared'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { TextTheme } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useNavigate } from 'react-router-dom'



interface INavbarProps {
    className?: string
}

export const Navbar = memo(({className}:INavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    }, [dispatch])

    const goToProfile = useCallback(()=> {
        if(!authData) return;
        navigate(RoutePath.profile + authData.id)
    }, [navigate, authData])

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
                <Dropdown
                    direction='bottom left'
                    className={cls.dropdown}
                    trigger={
                        (<Avatar
                            size={30} 
                            src={authData?.avatar}
                        />)
                    }
                    items= {[
                        {
                            id: 1,
                            content: t("Профиль"),
                            onClick: goToProfile
                        },
                        {
                            id: 2,
                            content: t("Выйти"),
                            onClick: onLogout
                        },
                        
                       
                    ]}
                />
                
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
