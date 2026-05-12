import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm  from './LoginForm';
import { StoreDecorators } from '@/shared/config/storybook/StoreDecorator/StoreDecorators';


export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorators({
    loginForm: {username: 'username', password: 'password'}
}) ]

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorators({
    loginForm: {username: 'username', password: 'password', error: 'error'}
}) ]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorators({
    loginForm: {username: 'username', password: 'password', isLoading:true}
}) ]
