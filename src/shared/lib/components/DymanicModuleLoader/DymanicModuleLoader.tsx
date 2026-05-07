import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import {  ReactNode, useEffect } from 'react';
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DymanicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DymanicModuleLoader = (props: DymanicModuleLoaderProps) => {
    const { children, 
        reducers, 
        removeAfterUnmount = true
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(()=> {
        const mountedReducers = store.reducerManager.getMountedReducers()
        Object.entries(reducers).forEach(([name, reducer])=> {
            const mounted = mountedReducers[name as StateSchemaKey];
            //Добавляем новый reducer, если его нет
            if(!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({type: `@INIT ${name} reducer`})
            }
        })
        
    
        return ()=> {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name])=> {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name}  reducer`})
                })
                
            }
            
        }
        //eslint-disable-next-line 
    }, [])

    return (
        <>
            {children}
        </>
    );
}