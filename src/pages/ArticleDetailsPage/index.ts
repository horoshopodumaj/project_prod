import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
import { ArticleDetailsRecommendationsSchema } 
    from './model/types/ArticleDetailsRecommendationsSchema'
import { ArticleDetailsPageSchema } 
    from './model/types'
import { articleDetailsRecommendationsReducer } 
    from "./model/slices/articleDetailsRecommendationsSlice";
import { fetchArtcileRecommendations } from 
    './model/services/fetchArtcileRecommendations/fetchArtcileRecommendations';


export {ArticleDetailsPageAsync as ArticleDetailsPage, 
    type ArticleDetailsCommentsSchema, 
    type ArticleDetailsRecommendationsSchema,
    articleDetailsRecommendationsReducer,
    type ArticleDetailsPageSchema,
    fetchArtcileRecommendations
}