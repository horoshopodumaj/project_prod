import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useCallback, useMemo } from 'react';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleSortField, 
    ArticleSortSelector, 
    ArticleType, 
    ArticleTypeTabs, 
    ArticleView, 
    ArticleViewSelector } 
    from '@/entities/Article';
import { 
    getArticlesPageOrder, 
    getArticlesPageSearch, 
    getArticlesPageSort, 
    getArticlesPageType, 
    getArticlesPageView } 
    from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card/Card';
import Input from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';


interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: React.FC<ArticlesPageFiltersProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const {t} = useTranslation('article');
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(()=> {
        dispatch(fetchArticlesList({replace: true}))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField)=> {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((order: SortOrder)=> {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string)=> {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData()
    }, [dispatch, debounceFetchData])

    const onChangeType = useCallback((value: ArticleType)=> {
        //TO-DO через generic
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, fetchData])

    

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector 
                    sort={sort} 
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input 
                    placeholder={t('Поиск')} 
                    value={search} 
                    onChange={onChangeSearch}/>
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
}