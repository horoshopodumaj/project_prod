
import { classNames } from '../../lib/classNames/classNames'
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';


export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY,
        ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.appLink, 
            {}, 
            [className, cls[theme]])}
        //eslint-disable-next-line 
        {...otherProps}
        >
            {children}
        </Link>
    );
})

AppLink.displayName = 'AppLink'; 
export default AppLink;