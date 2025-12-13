import { lazy } from 'react';

export const ProfilePageAsync = lazy(()=> new Promise((resolve)=> {
    //@ts-ignore
    //Удалить!!
    setTimeout(()=> resolve(import('./ProfilePage')), 1500)
}))

