import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { Icon, Text } from 'shared';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
    const { className, article, view } = props;

    if(view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>

                {article.title}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types}/>
                    <Text  text={String(article.views)} className={cls.views}/>
                    <Icon Svg={EyeIcon}/>
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </div>
    );
}