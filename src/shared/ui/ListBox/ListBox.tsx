import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button';

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

interface ListBoxProps {
    className?: string;
}

export function ListBox(props: ListBoxProps)  {
    const { 
        className, 
    } = props;

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <HListbox 
            as={'div'}
            className={classNames(cls.listBox, {}, [className])}
            value={selectedPerson} 
            onChange={setSelectedPerson}
        >
            <HListbox.Button 
                className={cls.trigger}
            >
                <Button>
                    {selectedPerson.name}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {people.map((person) => (
                    <HListbox.Option 
                        key={person.id} 
                        value={person} 
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item, 
                                    {[cls.active]: active}, 
                                    [className]
                                )}
                            >
                                {selected && '!!!'}
                                {person.name}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    )
}