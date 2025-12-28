import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DymanicModuleLoader, ReducersList } from 
    'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 
    'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArcticleDetailsData, getArcticleDetailsError, getArcticleDetailsIsLoading } from 
    '../../model/selectors/articleDetails';
import { Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';


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
    const data = useSelector(getArcticleDetailsData);

    useEffect(()=> {
        dispatch(fetchArticleById(id))
    }, [dispatch, id]);

    let content;



    if(isLoading) {
        content  = (
            <div>
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
            </div>
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
            <div>
                {`ArticleDetails`}
            </div>
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