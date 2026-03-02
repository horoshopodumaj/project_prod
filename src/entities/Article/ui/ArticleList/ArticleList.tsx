import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const { 
        className, 
        articles, 
        isLoading, 
        view= ArticleView.SMALL 
    } = props;


    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
            />
        )
    }

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles.length > 0 
                ? articles.map(renderArticle)
                : null}
        </div>
    );
}