import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrenceSelect } from './CurrenceSelect';

export default {
    title: 'entities/CurrenceSelect',
    component: CurrenceSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof CurrenceSelect>;

const Template: ComponentStory<typeof CurrenceSelect> = (args) => <CurrenceSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};


