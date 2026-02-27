import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentList  from './CommentList';
import { StoreDecorators } from 'shared/config/storybook/StoreDecorator/StoreDecorators';
import {action} from '@storybook/addon-actions'


export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            "id": "1",
            "text": "some comment",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        },
        {
            "id": "2",
            "text": "some comment 2",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        },
    ]
};
Primary.decorators = [StoreDecorators({}) ]

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            "id": "1",
            "text": "some comment",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        },
        {
            "id": "2",
            "text": "some comment 2",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        },
    ],
    isLoading: true
};
Loading.decorators = [StoreDecorators({}) ]

