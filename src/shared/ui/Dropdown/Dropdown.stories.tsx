import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import Button from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: '123',
            id: 1,
            onClick: console.log
        },
        {
            content: '1234',
            disabled: true,
            id: 2,
            onClick: console.log
        },
        {
            content: '1235',
            id: 3,
            onClick: console.log
        },
    ]
};
