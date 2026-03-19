import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
import { ArticleDetailsRecommendationsSchema } 
    from './model/types/ArticleDetailsRecommendationsSchema'
import { articleDetailsRecommendationsReducer } 
    from "./model/slices/articleDetailsRecommendationsSlice";


export {ArticleDetailsPageAsync as ArticleDetailsPage, 
    ArticleDetailsCommentsSchema, 
    ArticleDetailsRecommendationsSchema,
    articleDetailsRecommendationsReducer
}