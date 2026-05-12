import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleCodeBlock } from '@/entities/Article/model/types/article';
import { Code } from '@/shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo((props) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code}/>
        </div>
    );
})


ArticleCodeBlockComponent.displayName = "ArticleCodeBlockComponent";
