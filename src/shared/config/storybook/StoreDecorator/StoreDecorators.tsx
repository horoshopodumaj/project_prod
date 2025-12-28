import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';


const defaultAsyncReducers: ReducersList =  {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
}

//eslint-disable-next-line 
export const StoreDecorators = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) => (
    <StoreProvider 
        initialState={state} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
);
