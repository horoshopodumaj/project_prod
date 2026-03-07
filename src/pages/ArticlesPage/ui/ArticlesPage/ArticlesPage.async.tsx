import { lazy } from 'react';

export const ArticlesPageAsync = lazy(()=> new Promise((resolve)=> {
    //@ts-ignore
    //Удалить!!
    setTimeout(()=> resolve(import('./ArticlesPage')), 400)
}))
