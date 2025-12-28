import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DymanicModuleLoader, ReducersList } from 
    'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 
    'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArcticleDetailsData, getArcticleDetailsError, getArcticleDetailsIsLoading } from 
    '../../model/selectors/articleDetails';
import { Icon, Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { ArticleBlock, AticleBlockType } from '../..//model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 
    '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 
    '../ArticleTextBlockComponent/ArticleTextBlockComponent';



interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

const ArticleDetails: React.FC<ArticleDetailsProps> = (props) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const isLoading = useSelector(getArcticleDetailsIsLoading);
    const error = useSelector(getArcticleDetailsError);
    const article = useSelector(getArcticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock)=> {
        switch(block.type) {
        case AticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
        case AticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
        case AticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>
        default:
            return null;
        }
    }, [])

    useEffect(()=> {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id]);

    let content;

    if(isLoading) {
        content  = (
            <>
                <Skeleton 
                    width={200}
                    height={200}
                    border='50%'
                    className={cls.avatar}
                />
                <Skeleton 
                    width={300}
                    height={32}
                    className={cls.title}
                />
                <Skeleton 
                    width={300}
                    height={24}
                    className={cls.skeleton}
                />
                <Skeleton 
                    width={'100%'}
                    height={200}
                    className={cls.skeleton}
                />
                <Skeleton 
                    width={'100%'}
                    height={200}
                    className={cls.skeleton}
                />
            </>
        )
    } else if(error) {
        content  = (
            <Text
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar 
                        size={200} 
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text 
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text text={String(article?.views)}/>
                </div>

                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DymanicModuleLoader reducers={reducers} removeAfterUnmount={true}>

            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DymanicModuleLoader>
    );
}

ArticleDetails.displayName ="ArticleDetails";

export default memo(ArticleDetails);