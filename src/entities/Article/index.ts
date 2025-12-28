import { ArticleType } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
import { articleDetailsActions, articleDetailsReducer } from "./model/slice/articleDetailsSlice";


export { ArticleDetails, 
    ArticleType, 
    ArticleDetailsSchema,
    articleDetailsReducer,
    articleDetailsActions
}