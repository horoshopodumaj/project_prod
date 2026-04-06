import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import cls from './ListBox.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string)=> void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.bottom,
    top: cls.top
}

export function ListBox(props: ListBoxProps)  {
    const { 
        className, 
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom'
    } = props;

    const optionsClasses = [mapDirectionClass[direction]]

    return (
        <HListbox 
            as={'div'}
            className={classNames(cls.listBox, {}, [className])}
            value={value} 
            onChange={onChange}
            disabled={readonly}
        >
            <HListbox.Button 
                className={cls.trigger}
                disabled={readonly}
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
    )
}