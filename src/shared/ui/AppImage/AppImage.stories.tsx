import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppImage } from './AppImage';
import AvatarImg from './avatar_test.jpg'
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserIcom from './user-filled.svg'

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

const fallback = <Skeleton width={100} height={100} border='50%'/>
const errorFallback = <Icon
    inverted={true} 
    width={100} 
    height={100} 
    Svg={UserIcom}/>

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg, 
    width: 100,
    height: 100,
    alt: 'image',
    errorFallback: errorFallback,
    fallback: fallback
};

export const ErrorImg = Template.bind({});
ErrorImg.args = {
    width: 100,
    height: 100,
    alt: 'image',
    fallback: fallback,
    errorFallback: errorFallback,
};
