import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    size: 50
};

export const SelectedFour = Template.bind({});
SelectedFour.args = {
    size: 50,
    selectedStars: 4
};



