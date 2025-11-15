import React from 'react'
import { AppLink, classNames } from 'shared'
import cls from './Navbar.module.scss'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'


interface INavbarProps {
    className?: string
}

export const Navbar = ({className}:INavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} 
                    className={cls.mainLink}>{t("Главная страница")}
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>

        </div>
    )
}
