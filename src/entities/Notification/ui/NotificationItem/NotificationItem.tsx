import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED} 
            className={classNames(cls.notificationItem, {}, [className])}>
            <Text title={item.title} text={item.description}/>
        </Card>
    )

    if(item?.href) {
        return (
            <a className={cls.link} target='_blank' rel="noreferrer" href={item.href}>
                {content}
            </a>
        )
    }

    return  content
    ;
}