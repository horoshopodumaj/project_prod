import { lazy } from 'react';

export const MainPageAsync = lazy(()=> new Promise((resolve)=> {
    //@ts-ignore
    //Удалить!!
    setTimeout(()=> resolve(import('./MainPage')), 1500)
}))
