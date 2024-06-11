import Image from "next/image";
import Link from "next/link";
import type { Article } from "@pandamarket-api";
import { formatDate } from "@/libs/date";

export default function ArticlePreview({ data }: { data: Article }) {
  const { id, title, image, writer, likeCount, createdAt } = data;

  return (
    <Link href={`/addboard/${id}`}>
      <div className=" mb-6 w-full border-b pb-6">
        <div className="flex h-[72px] justify-between gap-2">
          <h1 className="text-lg font-semibold leading-5">{title}</h1>
          {image && (
            <div className="relative flex size-[72px] flex-shrink-0 items-center justify-center rounded-lg border-[0.75px] border-[#e5e7eb] bg-white">
              <Image
                src={image}
                alt="test"
                fill
                className="absolute rounded-lg object-cover p-3"
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Image
              src="/images/ic_profile.svg"
              alt="profile"
              width={24}
              height={24}
            />
            <span className="line-clamp-1 max-w-[120px] text-cool-gray-600">
              {writer.nickname}
            </span>
            <time dateTime={createdAt} className="text-cool-gray-400">
              {formatDate(createdAt)}
            </time>
          </div>

          <div className="flex gap-2">
            <Image
              src="/images/ic_heart.svg"
              alt="heart"
              width={24}
              height={24}
            />
            <span className="text-cool-gray-500">{likeCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
