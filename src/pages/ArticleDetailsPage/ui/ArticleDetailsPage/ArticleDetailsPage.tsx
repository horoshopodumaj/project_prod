import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared';
import { CommentList } from 'entities/Comment';
import { DymanicModuleLoader, ReducersList } from 
    'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';

import { useSelector } from 'react-redux';
import { getArticleComments, articleDetailsCommentsReducer } from 
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

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch()
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);


    const onSendComment = useCallback((text: string)=> {
        dispatch(addCommentForArticle(text))
    }, [dispatch])


    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id))
    })


    if(!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DymanicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={isLoading} comments={comments}/>
            </div>
        </DymanicModuleLoader>
    );
}

export default memo(ArticleDetailsPage)