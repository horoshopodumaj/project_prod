
export enum AticleBlocktype {
    TEXT ='TEXT',
    IMAGE='IMAGE',
    CODE='CODE'
}


export interface ArticleBlockBase {
    id: string;
    type: AticleBlocktype;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: AticleBlocktype.CODE;
    code: string;
}

export interface ArticlImageBlock extends ArticleBlockBase{
    type: AticleBlocktype.IMAGE;
    title: string;
    src: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: AticleBlocktype.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticlImageBlock |ArticleTextBlock;

export enum ArticleType {
    IT = "IT",
    SCIENCE='SCIENCE',
    ECONOMICS='ECONOMICS'
}


export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}