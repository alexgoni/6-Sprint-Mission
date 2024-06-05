declare module "@pandamarket-api" {
  type QueryString = string | string[];

  interface DataFormat<T> {
    list: T[];
    totalCount: number;
  }
}
