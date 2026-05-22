import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { action } from '@storybook/addon-actions';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'IT',
            content: 'IT'
        },
        {
            value: 'Экономика',
            content: 'Экономика'
        },
        {
            value: 'Политика',
            content: 'Политика'
        },
    ],
    value: 'Экономика',
    onTabClick: action('onTabClick')
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'IT',
            content: 'IT'
        },
        {
            value: 'Экономика',
            content: 'Экономика'
        },
        {
            value: 'Политика',
            content: 'Политика'
        },
    ],
    value: 'Экономика',
    onTabClick: action('onTabClick')
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

