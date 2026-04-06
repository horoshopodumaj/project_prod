import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button';

// const people = [
//     { id: 1, name: 'Durward Reynolds' },
//     { id: 2, name: 'Kenton Towne' },
//     { id: 3, name: 'Therese Wunsch' },
//     { id: 4, name: 'Benedict Kessler' },
//     { id: 5, name: 'Katelyn Rohan' },
// ]

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
    onChange: (value: string)=> void
}

export function ListBox(props: ListBoxProps)  {
    const { 
        className, 
        items,
        value,
        defaultValue,
        onChange
    } = props;

    const [selectedPerson, setSelectedPerson] = useState()

    return (
        <HListbox 
            as={'div'}
            className={classNames(cls.listBox, {}, [className])}
            value={value} 
            onChange={onChange}
        >
            <HListbox.Button 
                className={cls.trigger}
            >
                <Button>
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
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