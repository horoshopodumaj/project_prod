import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import ProfilePage from './ProfilePage';
import { StoreDecorators } from 'shared/config/storybook/StoreDecorator/StoreDecorators';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorators({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'admin',
            first: 'name',
            city: 'Erevan',
            currency: Currency.RUB,
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorators({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'admin',
            first: 'name',
            city: 'Erevan',
            currency: Currency.RUB,
        }
    }
})];
