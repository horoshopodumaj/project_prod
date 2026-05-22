import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ArticlesPage from './ArticlesPage';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import { ArticleType } from '@/entities/Article';
import Icon from '@/shared/assets/icons/js.png'
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});
Light.args = {
    
};
Light.decorators = [StoreDecorators({
    articlesPage: {
        ids: ['1', '2'],
        entities: {
            '1': {
                user: {
                    id: '1',
                    username: 'user1'
                },
                id: '1',
                title: 'Javascript news',
                subtitle: 'Что нового в JS за 2022 год?',
                img: Icon,
                views: 1022,
                createdAt: '26.02.2022',
                type: [ArticleType.IT],
            },
            '2': {
                user: {
                    id: '2',
                    username: 'user2'
                },
                id: '2',
                title: 'Javascript news',
                subtitle: 'Что нового в JS за 2022 год?',
                img: Icon,
                views: 1022,
                createdAt: '26.02.2022',
                type: [ArticleType.IT],
            },
        },
        //view: ArticleView.LIST,
    }
})];
//Light.decorators = [StoreDecorators({}) ]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorators({
        articlesPage: {
            ids: ['1', '2'],
            entities: {
                '1': {
                    user: {
                        id: '1',
                        username: 'user1'
                    },
                    id: '1',
                    title: 'Javascript news',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: Icon,
                    views: 1022,
                    createdAt: '26.02.2022',
                    type: [ArticleType.IT],
                },
                '2': {
                    user: {
                        id: '2',
                        username: 'user2'
                    },
                    id: '2',
                    title: 'Javascript news',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: Icon,
                    views: 1022,
                    createdAt: '26.02.2022',
                    type: [ArticleType.IT],
                },
            },
            //view: ArticleView.LIST,
        }
    })
];
//Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorators({}) ]
