import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { AppLink, Text, VStack } from '@/shared';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RoutePath } from "@/shared/const/router";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
    const { className, comment, isLoading } = props;
    
    if(isLoading) {
        return (
            <VStack gap='8' max 
                className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton className={cls.username} height={16} width={100}/>
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50}/>
            </VStack>
        )
    }

    if(!comment) return null;

    return (
        <VStack gap='8' max className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                <Avatar size={30} src={comment.user.avatar}/>
                <Text className={cls.username} title={comment.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </VStack>
    );
}   


export default CommentCard