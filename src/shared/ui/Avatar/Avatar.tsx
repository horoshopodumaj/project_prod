import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

//eslint-disable-next-line 
const defaultAvatar = `https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80`

export const Avatar: React.FC<AvatarProps> = (props) => {
    const { className, src, size, alt } = props;

    const styles  = useMemo<CSSProperties>(()=> {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size])

    return (    
        <img 
            src={src || defaultAvatar} 
            style={styles} 
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}>
            
        </img>
    );
}