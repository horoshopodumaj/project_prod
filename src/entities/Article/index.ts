import { ArticleSortField, ArticleView, ArticleType, ArticleBlockType } from "./model/const/const";
import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
import { articleDetailsActions } from "./model/slice/articleDetailsSlice";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { Article } from "./model/types//article";
import { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";
import { ArticleSortSelector } from "./ui/ArticleSortSelector/ArticleSortSelector";
import { ArticleTypeTabs } from "./ui/ArticleTypeTabs/ArticleTypeTabs";
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
    ArticleViewSelector,
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData

}