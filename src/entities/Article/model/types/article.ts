
export enum AticleBlockType {
    TEXT ='TEXT',
    IMAGE='IMAGE',
    CODE='CODE'
}

export enum ArticleView {
    BIG ='BIG',
    SMALL = "SMALL"
}


export interface ArticleBlockBase {
    id: string;
    type: AticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: AticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: AticleBlockType.IMAGE;
    title: string;
    src: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: AticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock |ArticleTextBlock;

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