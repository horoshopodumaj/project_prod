import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { addCommentForArticle } 
    from '../../model/services/addCommentForArticle/addCommentForArticle';
    
import { useSelector } from 'react-redux';
import { getArticleComments } from 
    '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from 
    '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { TextSize } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } 
    from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> = (props) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();

    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id))
    })
        
    const {t} = useTranslation('article');

    const comments = useSelector(getArticleComments.selectAll);
    const commentsisLoading = useSelector(getArticleCommentsIsLoading);
    
    
    const onSendComment = useCallback((text: string)=> {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    return (
        <div className={classNames('cls.articleDetailsComments', {}, [className])}>
            <Text size={TextSize.L} className={'cls.commentTitle'} title={t('Комментарии')}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList isLoading={commentsisLoading} comments={comments}/>
        </div>
    );
}