import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextSize, TextTheme }from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
    theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem insum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Title lorem insum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem insum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Title lorem insum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
    size: TextSize.L
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
    size: TextSize.M
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem insum',
    text: 'text text text text',
    size: TextSize.S
};
