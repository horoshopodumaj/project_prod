import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';


interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: React.FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(()=> {
        navigate(RoutePath.articles)
    }, [navigate])

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('Назад')}
            </Button>
            {canEdit && (
                <Button 
                    onClick={onBackToList}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
}