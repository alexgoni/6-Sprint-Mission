declare module "@pandamarket-api" {
  interface CommentType {
    id: number;
    writer: Writer;
    content: string;
    updatedAt: string;
    createdAt: string;
  }

  interface CommentRequestBody {
    content: string;
  }
}
