import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Text } from '@/shared';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = memo((props) => {
    const { className, block} = props;

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
            ))}
        </div>
    );
});

ArticleTextBlockComponent.displayName = "ArticleTextBlockComponent";