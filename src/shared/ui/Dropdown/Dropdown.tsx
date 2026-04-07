import { Menu,  } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight
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
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
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