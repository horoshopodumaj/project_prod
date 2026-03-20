import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import ArticleEditPage from './ArticleEditPage';
import { StoreDecorators } from 'shared/config/storybook/StoreDecorator/StoreDecorators';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorators({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorators({})
];
