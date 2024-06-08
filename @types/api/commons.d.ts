declare module "@pandamarket-api" {
  type QueryString = string | string[];

  interface Writer {
    nickname: string;
    id: number;
    image?: string;
  }

  interface DataFormat<T> {
    list: T[];
    totalCount?: number;
    nextCursor?: number;
  }
}
