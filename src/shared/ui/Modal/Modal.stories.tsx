import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem doloribus natus odio, veritatis debitis necessitatibus provident, quisquam alias dolor beatae tenetur voluptas voluptatem dolorem numquam consequuntur? Maiores, quas reprehenderit?",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem doloribus natus odio, veritatis debitis necessitatibus provident, quisquam alias dolor beatae tenetur voluptas voluptatem dolorem numquam consequuntur? Maiores, quas reprehenderit?",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

