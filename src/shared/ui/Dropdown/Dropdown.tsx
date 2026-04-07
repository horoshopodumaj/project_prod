import { Menu,  } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, ReactNode } from 'react';

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
    trigger: ReactNode
}

export function Dropdown(props: DropdownProps) {
    const { 
        className,
        items,
        trigger
    } = props;
    const {t} = useTranslation();

    return (
        <Menu 
            as='div'
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={cls.menu}>
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