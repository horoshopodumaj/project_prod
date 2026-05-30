import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { ArticleType } from '@/entities/Article';


interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType)=> void
}

export const ArticleTypeTabs: React.FC<ArticleTypeTabsProps> = (props) => {
    const { className, value, onChangeType } = props;
    const {t} = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(()=> [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },

    ], [t])

    const onTabClick = useCallback((tab: TabItem)=> {
        //TO-DO add generic component Tabs
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs 
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}

        />
            
    );
}