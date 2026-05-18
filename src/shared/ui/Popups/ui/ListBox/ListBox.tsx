import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import cls from './ListBox.module.scss';

import Button from '../../../Button/Button';
import { HStack } from '../../../Stack/HStack/HStack';
import { DropdownDirection } from '../../../../types/ui';
import { classNames } from '../../../../lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss'

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string)=> void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string
}

export function ListBox(props: ListBoxProps)  {
    const { 
        className, 
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label
    } = props;

    const optionsClasses = [mapDirectionClass[direction]]

    return (
        <HStack gap='4'>
            {label && <span className={cls.label}>{label + '>'}</span>}
        
            <HListbox 
                as={'div'}
                className={classNames(popupCls.popup, {}, [className])}
                value={value} 
                onChange={onChange}
                disabled={readonly}
            >   
                <HListbox.Button 
                    className={cls.trigger}
                >   
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options 
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option 
                            key={item.value} 
                            value={item.value} 
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item, 
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        }, 
                                        [className]
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}