interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: "favorite" | "recent";
  keyword?: string;
}

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: GetProductsParams = {}) {
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    keyword,
  });
  const url = `${process.env.REACT_APP_BASE_URL}/products?${searchParams}`;

  const res = await fetch(url);
  const body = await res.json();

  return body;
}
