import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Значение',
    options: [
        {
            value: '123',
            content: '123'
        },
        {
            value: '132',
            content: '132'
        },
        {
            value: '231',
            content: '231'
        },
    ]

};

export const Small = Template.bind({});
Small.args = {
    label: 'Значение',
    options: [
        {
            value: '123',
            content: '123'
        },
        {
            value: '132',
            content: '132'
        },
        {
            value: '231',
            content: '231'
        },
    ]
};

