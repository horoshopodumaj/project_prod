import { ArticleList } from 'entities/Article';
import { getArticlesPageIsLoading, getArticlesPageView }    
    from '../../model/selectors/articlesPageSelectors';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: React.FC<ArticleInfiniteListProps> = (props) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList 
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
}