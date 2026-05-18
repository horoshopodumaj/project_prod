import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, VStack } from '@/shared';
import { useTranslation } from 'react-i18next';
import  CommentCard from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

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
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {!comments?.length ? (
                <Text title={t('Комментариев нет')}/>
            ): (            
                comments.map((comment)=> (
                    <CommentCard 
                        isLoading={isLoading} 
                        key={comment.id}
                        comment={comment}
                    />
                ))
            )}
        </VStack>
    );
}

export default CommentList;