import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountrySelector } from './CountrySelector';

export default {
    title: 'entities/CountrySelector',
    component: CountrySelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof CountrySelector>;

const Template: ComponentStory<typeof CountrySelector> = (args) => <CountrySelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};


