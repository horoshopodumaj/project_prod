import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } 
    from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import {
    getArticlesPageIsLoading, 
    getArticlesPageView } 
    from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } 
    from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';


interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView);

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
                <ArticleList 
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DymanicModuleLoader>
    );
}

export default memo(ArticlesPage);