import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import { Button, Icon, Popover } from 'shared';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = (props) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon}
                        inverted
                    />
                </Button>
            )}
            direction={'bottom left'}
        >
            <NotificationList className={cls.notifications}/>
        </Popover>
    );
}