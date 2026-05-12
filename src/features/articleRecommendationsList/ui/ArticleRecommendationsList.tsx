import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, VStack } from '@/shared';
import { ArticleList } from '@/entities/Article';
import { TextSize } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';


interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: React.FC<ArticleRecommendationsListProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('article');
    const { isLoading, data: articles, error }= useArticleRecommendationsList(3);

    if(isLoading || error || !articles) {
        return null
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Рекомендации')}/>
            <ArticleList
                articles={articles}
                target={"_blank"}
            />
        </VStack>
    );
}