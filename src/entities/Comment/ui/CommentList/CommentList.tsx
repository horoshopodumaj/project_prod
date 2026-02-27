import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Comment } from 'entities/Comment';
import { Text } from 'shared';
import { useTranslation } from 'react-i18next';
import  CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList: React.FC<CommentListProps> = (props) => {
    const {t} = useTranslation();

    const { className, 
        comments, 
        isLoading 
    } = props;

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {!comments?.length ? (
                <Text title={t('Комментариев нет')}/>
            ): (            
                comments.map((comment)=> (
                    <CommentCard 
                        isLoading={isLoading} 
                        className={cls.comment} 
                        key={comment.id}
                        comment={comment}
                    />
                ))
            )}
        </div>
    );
}

export default CommentList;