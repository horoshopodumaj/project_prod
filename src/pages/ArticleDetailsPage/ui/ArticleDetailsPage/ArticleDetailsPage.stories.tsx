import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorators } from 'shared/config/storybook/StoreDecorator/StoreDecorators';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorators({
    articleDetailsComments: {
        ids: ['1', '2'],
        entities: {
            '1': {
                user: {
                    id: '1',
                    username: 'user1'
                },
                id: '1',
                text: 'comment',
                articleId: '1'
            },
            '2': {
                user: {
                    id: '2',
                    username: 'user2'
                },
                id: '2',
                text: 'comment',
                articleId: '1'
            },
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorators({
        articleDetailsComments: {
            ids: ['1', '2'],
            entities: {
                '1': {
                    user: {
                        id: '1',
                        username: 'user1'
                    },
                    id: '1',
                    text: 'comment',
                    articleId: '1'
                },
                '2': {
                    user: {
                        id: '2',
                        username: 'user2'
                    },
                    id: '2',
                    text: 'comment',
                    articleId: '1'
                },
            }
        }
    })
];
