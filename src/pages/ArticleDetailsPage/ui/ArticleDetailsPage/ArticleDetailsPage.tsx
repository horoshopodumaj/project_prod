import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import {  Text, VStack } from 'shared';
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
import { Page } from 'widgets/Page/Page';
import { TextSize } from 'shared/ui/Text/Text';
import { articlesDetailsReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articlesDetailsReducer
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsisLoading = useSelector(getArticleCommentsIsLoading);


    const onSendComment = useCallback((text: string)=> {
        dispatch(addCommentForArticle(text))
    }, [dispatch])


    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id))
    })


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
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList/>
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList isLoading={commentsisLoading} comments={comments}/>
                </VStack>
            </Page>
        </DymanicModuleLoader>
    );
}

export default memo(ArticleDetailsPage)