import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleType, ArticleViewSelector } from 'entities/Article';
import { Article, ArticleView, ArticleBlockType } from 'entities/Article/model/types/article';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } 
    from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageError, 
    getArticlesPageHasMore, 
    getArticlesPageIsLoading, 
    getArticlesPageNum, 
    getArticlesPageView } 
    from '../../model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';


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
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(()=> {
        if(hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page+1))
            dispatch(fetchArticlesList({
                page: page + 1
            }))
        }

    }, [dispatch, page, hasMore, isLoading])

    useInitialEffect(()=> {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({
            page: 1
        }))
    })

    return (
        <DymanicModuleLoader reducers={reducers}>
            <Page 
                onScrollEnd={onLoadNextPart} 
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView}
                />
                <ArticleList 
                    isLoading={isLoading}
                    view={view}
                    articles={articles}/>
            </Page>
        </DymanicModuleLoader>
    );
}

export default memo(ArticlesPage);