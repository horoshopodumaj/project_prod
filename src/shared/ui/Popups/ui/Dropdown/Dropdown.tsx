import { Menu,  } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from '../../../../lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss'

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick: ()=> void;
    href?: string;
    id: number
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const { 
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu 
            as='div'
            className={classNames(popupCls.popup, {}, [className])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items?.map((item)=> (
                    <Menu.Item as={Fragment} 
                        key={item.id}
                        disabled={item.disabled}
                    >
                        {({ active }) => (
                            <button
                                className={classNames(
                                    cls.item, 
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled
                                        
                                    }, 
                                    [className])}
                                onClick={item.onClick}
                                type='button'
                            >
                                {item.content}
                            </button>
                        )}
                    
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}