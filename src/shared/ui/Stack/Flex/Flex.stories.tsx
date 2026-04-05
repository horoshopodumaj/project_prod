import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    gap: '8',
    children: <>
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
        <div>text 4</div>
    </>
};

export const Row16 = Template.bind({});
Row16.args = {
    gap: '16',
    children: <>
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
        <div>text 4</div>
    </>
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    gap: '8',
    children: <>
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
        <div>text 4</div>
    </>

};

export const Column16 = Template.bind({});
Column16.args = {
    direction: 'column',
    gap: '16',
    children: <>
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
        <div>text 4</div>
    </>

};



// CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

