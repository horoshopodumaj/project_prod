import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
import { useTranslation } from 'react-i18next';
import { Button, HStack } from '@/shared';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from '@/entities/Article';


interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: React.FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(()=> {
        navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle= useCallback(()=> {
        if(!article) return
        navigate(getRouteArticleEdit(article.id) )
    }, [navigate, article])

    return (
        <HStack justify='between' max 
            className={classNames('', {}, [className])}>
            <Button onClick={onBackToList}>
                {t('Назад')}
            </Button>
            {canEdit && (
                <Button 
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
}