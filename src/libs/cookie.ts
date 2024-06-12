export function getCookie(name: string) {
  if (typeof window === "undefined") return null;

  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  const cookie = cookies.find((each) => {
    const [cookieName] = each.split("=");
    return cookieName === name;
  });

  if (cookie) {
    const [, cookieValue] = cookie.split("=");
    return decodeURIComponent(cookieValue);
  }

  return null;
}

export function setCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof window === "undefined") return;

  document.cookie = `${name}=${value}; max-age=${maxAgeSeconds}; path=/; SameSite=Strict`;
}
