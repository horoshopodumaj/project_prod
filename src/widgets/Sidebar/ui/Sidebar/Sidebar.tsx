import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {  Button } from 'shared';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import SidebarItem from '../SidebarItem/SidebarItem';


interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = memo((props) => {
    const { className } = props;

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
                {SidebarItemsList.map((item)=> (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed}/>
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher 
                    className={cls.lang} 
                    short={collapsed}/>
            </div>
        </div>
    );
});


Sidebar.displayName = 'Sidebar'; 
export default Sidebar;