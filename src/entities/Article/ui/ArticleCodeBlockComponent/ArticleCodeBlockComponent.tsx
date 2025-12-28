import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            {`ArticleCodeBlockComponent`}
        </div>
    );
}