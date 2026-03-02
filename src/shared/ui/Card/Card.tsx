import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <div className={classNames(cls.card, {}, [className])} {...restProps}>
            {children}
        </div>
    );
}