import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import {  useEffect } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DymanicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DymanicModuleLoader: React.FC<DymanicModuleLoaderProps> = (props) => {
    const { children, 
        reducers, 
        removeAfterUnmount
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(()=> {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry)=> {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`})
        })
        
    
        return ()=> {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry)=> {
                    store.reducerManager.remove(name);
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