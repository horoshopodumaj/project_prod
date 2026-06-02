import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../AppImage';
import UserIcom from '../../assets/icons/user-filled.svg'
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
    const { 
        className, 
        src, 
        size = 100, 
        alt,
        fallbackInverted
    } = props;

    const styles  = useMemo<CSSProperties>(()=> {
        return {
            width: size,
            height: size,
        }
    }, [size])

    const fallback = <Skeleton width={size} height={size} border='50%'/>
    const errorFallback = <Icon 
        inverted={fallbackInverted} 
        width={size} 
        height={size} 
        Svg={UserIcom}/>

    return (    
        <AppImage
            src={src} 
            style={styles} 
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            errorFallback={errorFallback}
            fallback={fallback}
        />
    );
}