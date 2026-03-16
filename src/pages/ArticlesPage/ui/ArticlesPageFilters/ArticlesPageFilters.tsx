import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useCallback } from 'react';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } 
    from 'entities/Article';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView } 
    from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';


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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField)=> {
        dispatch(articlesPageActions.setSort(sort))
    }, [dispatch])

    const onChangeOrder = useCallback((order: SortOrder)=> {
        dispatch(articlesPageActions.setOrder(order))
    }, [dispatch])

    const onChangeSearch = useCallback((search: string)=> {
        dispatch(articlesPageActions.setSearch(search))
    }, [dispatch])

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
        </div>
    );
}