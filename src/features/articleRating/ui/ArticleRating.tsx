import { RatingCard } from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useArticleRating } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = 
        useArticleRating(articleId ? { userId: userData?.id ?? '', articleId } : skipToken);


    if(isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    const rating = data?.[0]

    return (
        <RatingCard 
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв на статью, это помогает нам улучшать качество')}
            hasFeedback={Boolean(rating?.feedback) || false}
            rate={rating?.rate}

        />

    );
}

export default ArticleRating