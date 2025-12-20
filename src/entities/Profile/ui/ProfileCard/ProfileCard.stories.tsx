import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import{ ProfileCard}  from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/avatar_test.jpg';


export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'admin',
        first: 'name',
        city: 'Erevan',
        currency: Currency.RUB,
        avatar: Avatar
    }
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

