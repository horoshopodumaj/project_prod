import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentCard  from './CommentCard';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';


export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: 
        {
            "id": "1",
            "text": "some comment",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        }

};
Primary.decorators = [StoreDecorators({}) ]

export const Loading = Template.bind({});
Loading.args = {
    comment: 
        {
            "id": "1",
            "text": "some comment",
            "articleId": "1",
            "user": {
                id: '1',
                username: 'Test'
            }
        },
    isLoading: true

};
Loading.decorators = [StoreDecorators({}) ]

