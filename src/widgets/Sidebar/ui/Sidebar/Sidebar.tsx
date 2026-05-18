import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import {  Button, VStack } from '@/shared';
import { ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';



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
        <aside 
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
            <VStack role='navigation' className={cls.items}
                gap='8'
            >
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher 
                    className={cls.lang} 
                    short={collapsed}/>
            </div>
        </aside>
    );
});


Sidebar.displayName = 'Sidebar'; 
export default Sidebar;