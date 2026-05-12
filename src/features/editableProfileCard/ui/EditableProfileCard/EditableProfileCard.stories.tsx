import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard }  from './EditableProfileCard';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const profile = {
    "id": "1",
    "first": "Maria",
    "lastname": "Ivanova",
    "age": 23,
    "currency": Currency.EUR,
    "country": Country.Belarus,
    "city": "Moscow",
    "username": "admin",
}


export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorators({
    profile: {
        form: profile,
        readOnly: true
    }
}) ]

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorators({
    profile: {
        form: profile,
        error: 'Ошибка',
        readOnly: true
    }
}) ]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorators({
    profile: {
        form: profile,
        isLoading: true,
        readOnly: true
    }
}) ]
