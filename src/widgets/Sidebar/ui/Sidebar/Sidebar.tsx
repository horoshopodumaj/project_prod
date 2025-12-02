import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, Button } from 'shared';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'


interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = async()=> {
        setCollapsed(prev => !prev)
    }

    return (
        <div 
            data-testid='sidebar'
            className={classNames(cls.sidebar, 
                {[cls.collapsed]: collapsed}, 
                [className])}>
            {/* eslint-disable-next-line */}
            <Button data-testid='sidebar-toggle' 
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink 
                    to={RoutePath.main} 
                    theme={AppLinkTheme.SECONDARY} 
                    className={cls.link}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.item}>{t("Главная страница")}</span>
                    

                </AppLink>
                <AppLink 
                    to={RoutePath.about} 
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.item}>{t('О нас')}</span>
                    
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher 
                    className={cls.lang} 
                    short={collapsed}/>
            </div>
        </div>
    );
}