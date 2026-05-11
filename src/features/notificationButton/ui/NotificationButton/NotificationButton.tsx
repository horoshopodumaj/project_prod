import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import { Button, Icon, Popover } from 'shared';
import { ButtonTheme } from 'shared/ui/Button/Button';
import Drawer from 'shared/ui/Drawer/Drawer';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = (props) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(()=> {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(()=> {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon}
                inverted
            />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.notificationButton, {}, [className])}
                    trigger={trigger}
                    direction={'bottom left'}
                >
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>

    );
}