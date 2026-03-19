import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Text } from 'shared';
import { CommentList } from 'entities/Comment';
import { DymanicModuleLoader, ReducersList } from 
    'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';

import { useSelector } from 'react-redux';
import { getArticleComments } from 
    '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from 
    '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } 
    from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } 
    from '../../model/services/addCommentForArticle/addCommentForArticle';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleRecomendations } 
    from '../../model/slices/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading } 
    from '../../model/selectors/recommenfations';
import { TextSize } from 'shared/ui/Text/Text';
import { fetchArtcileRecommendations } 
    from '../../model/services/fetchArtcileRecommendations/fetchArtcileRecommendations';
import { articlesDetailsReducer } from '../../model/slices';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articlesDetailsReducer
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecomendations.selectAll);
    const commentsisLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsisLoading = useSelector(getArticleRecommendationsIsLoading);


    const onSendComment = useCallback((text: string)=> {
        dispatch(addCommentForArticle(text))
    }, [dispatch])


    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArtcileRecommendations())
    })

    const onBackToList = useCallback(()=> {
        navigate(RoutePath.articles)
    }, [navigate])


    if(!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <DymanicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button onClick={onBackToList}>
                    {t('Назад')}
                </Button>
                <ArticleDetails id={id}/>
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендации')}/>
                <ArticleList 
                    articles={recommendations}
                    isLoading={recommendationsisLoading}
                    className={cls.recommendations}
                    target={"_blank"}
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={commentsisLoading} comments={comments}/>
            </Page>
        </DymanicModuleLoader>
    );
}

export default memo(ArticleDetailsPage)