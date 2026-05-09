import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <div style={{padding: 200}}><Story/></div>]
} as ComponentMeta<typeof ListBox>;

const options = [
    {value: '123', content: '123'},
    {value: '12356', content: '12356'},
    {value: '12356752', content: '12356752'},
]

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'Выберите значение',
    label: 'Значение',
    value: '12356',
    onChange: console.log,
    items: options,
    readonly: false,
    direction: 'bottom left'
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'Выберите значение',
    label: 'Значение',
    value: '12356',
    onChange: console.log,
    items: options,
    readonly: false,
    direction: 'bottom right'
};

export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'Выберите значение',
    label: 'Значение',
    value: '12356',
    onChange: console.log,
    items: options,
    readonly: false,
    direction: 'top right'
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'Выберите значение',
    label: 'Значение',
    value: '12356',
    onChange: console.log,
    items: options,
    readonly: false,
    direction: 'top left'
};
