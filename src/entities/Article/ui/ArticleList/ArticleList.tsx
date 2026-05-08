import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from "entities/Article/model/const/const";
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return (
        new Array(view === ArticleView.TILED ? 9 : 3)
            .fill(0)
            .map((item, index)=> (
                <ArticleListItemSkeleton view={view} className={cls.card} key={index}/>
            ))
    )
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const { 
        className, 
        articles, 
        isLoading,
        target,
        view= ArticleView.TILED 
    } = props;

    const {t} = useTranslation('article');


    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
                className={cls.card}
                key={article.id}
                target={target}
            />
        )
    }

    if(!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles?.length > 0 
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
}