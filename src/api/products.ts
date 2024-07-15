interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "favorite";
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

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products?${searchParams}`;

  const res = await fetch(url);
  const body = await res.json();

  if (!res.ok) throw new Error(`${body.message}`);
  return body;
}
