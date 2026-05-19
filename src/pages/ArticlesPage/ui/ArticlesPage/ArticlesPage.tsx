import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { DymanicModuleLoader, ReducersList } 
    from '@/shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { articlesPageReducer } 
    from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } 
    from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';


interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(()=> {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(()=> {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DymanicModuleLoader reducers={reducers} removeAfterUnmount={false}
        >
            <Page 
                onScrollEnd={onLoadNextPart} 
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticleInfiniteList 
                    className={cls.list}
                />
            </Page>
        </DymanicModuleLoader>
    );
}

export default memo(ArticlesPage);