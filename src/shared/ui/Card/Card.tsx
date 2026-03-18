import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export enum CardTheme {
    NORMAL='normal',
    OUTLINED='outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme
}

export const Card: React.FC<CardProps> = (props) => {
    const { className, children, theme= CardTheme.NORMAL, ...restProps } = props;

    return (
        <div className={classNames(cls.card, {}, [className, cls[theme]])} {...restProps}>
            {children}
        </div>
    );
}