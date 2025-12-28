import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            {`ArticleImageBlockComponent`}
        </div>
    );
}