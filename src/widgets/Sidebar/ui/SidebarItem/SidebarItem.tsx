import cls from './SidebarItem.module.scss';
import { AppLink, classNames } from 'shared';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if(item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            to={item.path} 
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.link, {[cls.collapsed]: collapsed}, []) }
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.item}>{t(item.text)}</span>
                    
        </AppLink>
    );
})


SidebarItem.displayName = 'SidebarItem'; 
export default SidebarItem;