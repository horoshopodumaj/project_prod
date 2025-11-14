import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared';


interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
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
            <Button data-testid='sidebar-toggle' onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
}