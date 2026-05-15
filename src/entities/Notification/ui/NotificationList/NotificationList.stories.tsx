import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';
import withMock from 'storybook-addon-mock';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import { Notification } from '../../model/types/notification';


const notification: Notification = {
    "id": "1",
    "title": "Уведомление 1",
    "description": "Произошло какое-то событие",
}

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;


export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorators({})]
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: '1'},
                {...notification, id: '2'},
                {...notification, id: '3'},
                {...notification, id: '4'},
            ],
        },
    ],
};

export const Delay = Template.bind({});
Delay.args = {};
Delay.decorators = [StoreDecorators({})]
Delay.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: '1'},
                {...notification, id: '2'},
                {...notification, id: '3'},
                {...notification, id: '4'},
            ],
            delay: 5000,
        },
    ],
};

