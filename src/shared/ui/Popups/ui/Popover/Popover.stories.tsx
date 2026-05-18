import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { NotificationList } from '@/entities/Notification';
import Button from '../../../Button/Button';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import withMock from 'storybook-addon-mock';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock,
        (Story) => <div style={{padding: 100}}><Story/></div>,
        StoreDecorators({})
    ]

} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}  />;

const notification = {
    "id": "1",
    "title": "Уведомление 1",
    "description": "Произошло какое-то событие",
    "userId": "1"
}

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    children: <NotificationList />,
    trigger: <Button>Open</Button>,
    direction: 'bottom left',
};
BottomLeft.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: 1},
                {...notification, id: 2},
                {...notification, id: 3},
            ],
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    children: <NotificationList />,
    trigger: <Button>Open</Button>
};
BottomRight.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: 1},
                {...notification, id: 2},
                {...notification, id: 3},
            ],
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    children: <NotificationList />,
    trigger: <Button>Open</Button>,
    direction: 'top right',
};
TopRight.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: 1},
                {...notification, id: 2},
                {...notification, id: 3},
            ],
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    children: <NotificationList />,
    trigger: <Button>Open</Button>,
    direction: 'top left',
};
TopLeft.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {...notification, id: 1},
                {...notification, id: 2},
                {...notification, id: 3},
            ],
        },
    ],
};
