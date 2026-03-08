import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {  Button } from 'shared';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';


interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = memo((props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = async()=> {
        setCollapsed(prev => !prev)
    };

    const itemsList = useMemo(()=> sidebarItemsList.map((item)=> (
        <SidebarItem 
            key={item.path} 
            item={item} 
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemsList])

    return (
        <menu 
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
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher 
                    className={cls.lang} 
                    short={collapsed}/>
            </div>
        </menu>
    );
});


Sidebar.displayName = 'Sidebar'; 
export default Sidebar;