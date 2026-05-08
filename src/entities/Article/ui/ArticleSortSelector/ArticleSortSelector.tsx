import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOptions } from 'shared';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleSortField } from "../../model/const/const";
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> = (props) => {
    const { className, onChangeSort, sort, order, onChangeOrder } = props;
    const {t} = useTranslation('article');

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(()=> ([{
        value: 'asc',
        content: t('возрастанию')
    },
    {
        value: 'desc',
        content: t('убыванию')
    }
    ]), [t]);


    const sortFieldOptions = useMemo(()=> ([{
        value: ArticleSortField.CREATED,
        content: t('дате создания')
    },
    {
        value: ArticleSortField.TITLE,
        content: t('заголовку')
    },
    {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам')
    }
    ]), [t])

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select 
                options={sortFieldOptions} 
                value={sort}
                label={t('Сортировать по')}
                onChange={onChangeSort}
            />
            <Select
                value={order} 
                onChange={onChangeOrder} 
                options={orderOptions} 
                label={t('по')}
                className={cls.order}
            />
        </div>
    );
}