import { ArticleSortField, ArticleView, ArticleType, ArticleBlockType } from "./model/const/const";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
import { articleDetailsActions } from "./model/slice/articleDetailsSlice";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { Article } from "./model/types//article";
import { getArticleDetailsError, 
    getArticleDetailsIsLoading, 
    getArticleDetailsData 
} from "./model/selectors/articleDetails";



export { ArticleDetails, 
    ArticleType, 
    ArticleView,
    ArticleBlockType,
    type ArticleDetailsSchema,
    articleDetailsActions,
    ArticleList,
    type Article,
    ArticleSortField,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData

}