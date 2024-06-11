import Image from "next/image";
import Link from "next/link";
import type { Article } from "@pandamarket-api";
import { formatDate } from "@/libs/date";

export default function ArticleCard({ data }: { data: Article }) {
  const { id, title, image, writer, likeCount, createdAt } = data;

  return (
    <Link href={`/addboard/${id}`}>
      <div className="h-[167px] w-full min-w-[292px] rounded-lg bg-cool-gray-200 px-6 pb-4">
        <div className="flex h-[30px] w-[102px] items-center justify-center gap-1 rounded-b-[32px] bg-main-blue">
          <Image
            src="/images/ic_medal.svg"
            alt="medal"
            width={16}
            height={16}
          />
          <span className="font-semibold text-white">Best</span>
        </div>

        <div className="mt-4 flex h-[72px] justify-between gap-2">
          <h1 className="line-clamp-3 h-[60px] text-lg font-semibold leading-5">
            {title}
          </h1>
          {image && (
            <div className="flex size-[72px] flex-shrink-0 items-center justify-center rounded-lg border-[0.75px] border-[#e5e7eb] bg-white p-3">
              <Image
                src={image}
                alt="thumbnail"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center text-cool-gray-600">
            <span>{writer.nickname}</span>
            <Image
              src="/images/ic_heart.svg"
              alt="heart"
              width={16}
              height={16}
              className="ml-2"
            />
            <span className="ml-1">{likeCount}</span>
          </div>

          <time dateTime={createdAt} className="text-cool-gray-400">
            {formatDate(createdAt)}
          </time>
        </div>
      </div>
    </Link>
  );
}

function ArticleCardSkeleton() {
  return (
    <div className="h-[167px] w-full min-w-[292px] rounded-lg bg-cool-gray-300 px-6 pb-4" />
  );
}

ArticleCard.Skeleton = ArticleCardSkeleton;
