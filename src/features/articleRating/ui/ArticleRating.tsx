import { RatingCard } from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useArticleRating, useRateArticle } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';

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

    const [rateArticleMutation] = useRateArticle()

    const rating = data?.[0];


    const handleRateArticle = useCallback((starsCount: number, feedback?: string)=> {
        try {
            rateArticleMutation({
                articleId: articleId ?? '',
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback: feedback ?? ''
            })
        } catch (error) {
            console.log(error)
        }

    }, [articleId, rateArticleMutation, userData?.id])


    const onAccept = useCallback((starsCount: number, feedback?: string)=> {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((starsCount: number)=> {
        handleRateArticle(starsCount)
    }, [handleRateArticle])


    if(isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    return (
        <RatingCard 
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв на статью, это помогает нам улучшать качество')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />

    );
}

export default ArticleRating