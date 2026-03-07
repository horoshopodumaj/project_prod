import { ArticleType, ArticleView } from "./model/types/article";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
import { articleDetailsActions, articleDetailsReducer } from "./model/slice/articleDetailsSlice";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { Article } from "./model/types//article";



export { ArticleDetails, 
    ArticleType, 
    ArticleView,
    ArticleDetailsSchema,
    articleDetailsReducer,
    articleDetailsActions,
    ArticleList,
    Article
}