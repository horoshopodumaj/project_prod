import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileRating  from './ProfileRating';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import withMock from 'storybook-addon-mock';
import { UserRole } from '@/entities/User';
import { Rating } from '@/entities/Rating';

const rating:Rating = {
    "rate": 5,
    "feedback": "Хорошая статья",
}

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock]
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profileId: '1'
};
Primary.decorators = [StoreDecorators({
    user: {
        authData: {
            id: '1',
            username: 'manager',
            roles: [UserRole.MANAGER]
        }
    }
}) ]
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                {...rating, profileId: '1', userId: '1'},
            ],
        },
    ],
};

export const Delay = Template.bind({});
Delay.args = {
    profileId: '1'
};
Delay.decorators = [StoreDecorators({
    user: {
        authData: {
            id: '1',
            username: 'manager',
            roles: [UserRole.MANAGER]
        }
    }
}) ]
Delay.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                {...rating, profileId: '1', userId: '1'},
            ],
            delay: 5000
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    profileId: '1'
};
WithoutRate.decorators = [StoreDecorators({
    user: {
        authData: {
            id: '1',
            username: 'manager',
            roles: [UserRole.MANAGER]
        }
    }
}) ]
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

