import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddCommentForm  from './AddCommentForm';
import { StoreDecorators } from 'shared/config/storybook/StoreDecorator/StoreDecorators';
import {action} from '@storybook/addon-actions'


export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment')
};
Primary.decorators = [StoreDecorators({}) ]

