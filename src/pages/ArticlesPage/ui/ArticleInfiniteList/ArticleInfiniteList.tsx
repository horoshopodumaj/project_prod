import { ArticleList } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }    
    from '../../model/selectors/articlesPageSelectors';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { Text } from 'shared';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: React.FC<ArticleInfiniteListProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView);

    if(error) {
        return <Text text={t('Попробуйте обновить страницу')}/>
    }

    return (
        <ArticleList 
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
}