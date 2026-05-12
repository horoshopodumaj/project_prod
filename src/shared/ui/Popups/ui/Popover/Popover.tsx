import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { Popover as HPopover } from '@headlessui/react'
import { DropdownDirection } from '../../../../types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss'

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { 
        className, 
        trigger, 
        direction = 'bottom right',
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])} >
            <HPopover.Button as='div' className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}