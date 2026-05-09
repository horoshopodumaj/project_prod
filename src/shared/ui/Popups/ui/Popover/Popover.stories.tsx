import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <div style={{padding: 200}}><Story/></div>]
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {};

export const BottomRight = Template.bind({});
BottomRight.args = {};

export const TopRight = Template.bind({});
TopRight.args = {};

export const TopLeft = Template.bind({});
TopLeft.args = {};
