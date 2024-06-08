declare module "@pandamarket-api" {
  interface Article {
    updatedAt: string;
    createdAt: string;
    likeCount: number;
    writer: Writer;
    image: string;
    content: string;
    title: string;
    id: number;
  }

  interface ArticleRequestBody {
    title: string;
    content: string;
    image?: string;
  }
}
