import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export enum CardTheme {
    NORMAL='normal',
    OUTLINED='outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {
    const { className, children, theme= CardTheme.NORMAL, max, ...restProps } = props;

    return (
        <div 
            className={classNames(cls.card, {[cls.max]: max}, [className, cls[theme]])} 
            {...restProps}
        >
            {children}
        </div>
    );
}