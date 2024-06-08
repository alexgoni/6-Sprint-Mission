import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="일상의 모든 물건을 거래해 보세요" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/main_logo.svg" as="image" />
        <link rel="preload" href="/images/main_logo_small.svg" as="image" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
