import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {`ArticleTextBlockComponent`}
        </div>
    );
}