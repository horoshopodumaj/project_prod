import { classNames } from 'shared/lib/classNames/classNames';
import { Text, VStack } from 'shared';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 
    'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArtcileRecommendations } from 'pages/ArticleDetailsPage';
import { TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';


interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: React.FC<ArticleRecommendationsListProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('article');

    const dispatch = useAppDispatch();

    useInitialEffect(()=> {
        dispatch(fetchArtcileRecommendations())
    })

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Рекомендации')}/>
            <ArticleList
                articles={[]}
                target={"_blank"}
            />
        </VStack>
    );
}