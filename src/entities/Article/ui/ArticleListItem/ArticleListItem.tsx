import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } 
    from '../../model/types/article';
import { ArticleBlockType, ArticleView } from "../../model/const/const";
import { AppLink, Button, Icon, Text } from '@/shared';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { HTMLAttributeAnchorTarget } from 'react';
import { RoutePath } from "@/shared/const/router";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
    const { className, article, view, target } = props;
    const {t} = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types}/>

    const views = (
        <>
            <Text  text={String(article.views)} className={cls.views}/>
            <Icon Svg={EyeIcon}/>
        </>
    )

    if(view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block)=> block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>

                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text title={article.title}  className={cls.title}/>
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img}/>
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink 
                            target={target}
                            to={RoutePath.article_details + article.id}>
                            <Button 
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Читать далее')}
                            </Button>

                        </AppLink>
                        
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink 
            target={target}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}
            to={RoutePath.article_details + article.id}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
}