interface GetCommentListParams {
  productId: string;
  limit?: number;
  cursor?: number;
}

export async function getCommentList({
  productId,
  limit = 5,
  cursor,
}: GetCommentListParams) {
  const searchParams = new URLSearchParams({
    limit: String(limit),
  });

  if (cursor !== undefined) {
    searchParams.append("cursor", String(cursor));
  }

  const url = `${process.env.REACT_APP_BASE_URL}/products/${productId}/comments?${searchParams}`;

  const res = await fetch(url);
  const body = await res.json();

  return body;
}

interface PostCommentParams {
  productId: string;
  content: string;
}

export async function postComment({ productId, content }: PostCommentParams) {
  const accessToken = localStorage.getItem("accessToken");
  const url = `${process.env.REACT_APP_BASE_URL}/products/${productId}/comments`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ content }),
  });

  const body = await res.json();

  return body;
}
