import React, { memo, useCallback, useState } from 'react'
import { AppLink, Button, classNames, Dropdown, HStack, Icon, Popover, Text } from 'shared'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { TextTheme } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'



interface INavbarProps {
    className?: string
}

export const Navbar = memo(({className}:INavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);


    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        navigate(RoutePath.main)
    }, [dispatch, navigate])

    const goToProfile = useCallback(()=> {
        if(!authData) return;
        navigate(RoutePath.profile + authData.id)
    }, [navigate, authData])

    const goToAdmin = useCallback(()=> {
        if(!authData) return;
        navigate(RoutePath.admin_panel)
    }, [navigate, authData])

    const isAdminPanelAvailable = isAdmin || isManager

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
                    <Popover 
                        trigger={(
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon Svg={NotificationIcon}
                                    inverted
                                />
                            </Button>
                        )}
                        direction={'bottom left'}
                    >
                        <NotificationList className={cls.notifications}/>
                    </Popover>
                    
                    <Dropdown
                        direction='bottom left'
                        trigger={
                            (<Avatar
                                size={30} 
                                src={authData?.avatar}
                            />)
                        }
                        items= {[
                            ...(isAdminPanelAvailable ? [{
                                id: 0,
                                content: t("Админка"),
                                onClick: goToAdmin
                            }]: []),
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
