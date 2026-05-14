import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown }  from './AvatarDropdown';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';
import { UserRole } from '@/entities/User';


export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <div style={{padding: 200, display: 'flex', justifyContent: 'flex-end'}}><Story/></div>]
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const ManagerOrAdmin = Template.bind({});
ManagerOrAdmin.args = {};
ManagerOrAdmin.decorators = [StoreDecorators({
    user: {
        authData: {
            id: '1',
            username: 'manager',
            roles: [UserRole.MANAGER]
        }
    }
}) ]

export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorators({
    user: {
        authData: {
            id: '1',
            username: 'user',
            roles: [UserRole.USER]
        }
    }
}) ]
