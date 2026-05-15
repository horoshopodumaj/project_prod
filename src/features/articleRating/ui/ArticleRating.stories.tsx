import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleRating  from './ArticleRating';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import withMock from 'storybook-addon-mock';
import { UserRole } from '@/entities/User';
import { Rating } from '@/entities/Rating';

const rating:Rating = {
    "rate": 5,
    "feedback": "Хорошая статья",
}

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    articleId: '1'
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
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {...rating, articleId: '1', userId: '1'},
            ],
        },
    ],
};

export const Delay = Template.bind({});
Delay.args = {
    articleId: '1'
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
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {...rating, articleId: '1', userId: '1'},
            ],
            delay: 5000
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1'
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
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

