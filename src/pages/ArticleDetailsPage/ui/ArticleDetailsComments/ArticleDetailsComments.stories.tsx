import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComments }  from './ArticleDetailsComments';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';


const entities = {
    "1": {
        "id": "1",
        "text": "some comment",
        "articleId": "1",
        "user": {
            id: '1',
            username: 'Test'
        }
    },
    "2": {
        "id": "2",
        "text": "some comment 2",
        "articleId": "1",
        "user": {
            id: '1',
            username: 'Test'
        }
    }
}


export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorators({
    articleDetailsPage: {
        comments: {
            ids: ['1', '2'],
            entities: entities
        }
    }
}) ]

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorators({
    articleDetailsPage: {
        comments: {
            ids: ['1', '2'],
            entities: entities,
            error: 'Error'
        }
    }
}) ]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorators({
    articleDetailsPage: {
        comments: {
            ids: ['1', '2'],
            entities: entities,
            isLoading: true
        }
    }
}) ]
