import Image from "next/image";
import { CommentType } from "@pandamarket-api";
import { formatTimeAgo } from "@/libs/date";

export default function Comment({ data }: { data: CommentType }) {
  return (
    <div className="mb-4 border-b md:mb-6">
      <div className="flex items-center justify-between">
        <span className="text-cool-gray-800 ">{data?.content}</span>
        <Image src="/images/ic_kebab.svg" alt="kebab" width={24} height={24} />
      </div>

      <div className="my-4 grid w-max grid-cols-2-auto grid-rows-2 gap-x-2 md:my-6">
        <Image
          src={data?.writer?.image ?? "/images/profile.svg"}
          alt="profile"
          width={32}
          height={32}
          className="row-span-2 size-8 place-self-center rounded-full object-cover"
        />
        <span className="text-sm text-cool-gray-600">
          {data?.writer?.nickname}
        </span>
        <span className="text-xs text-cool-gray-400">
          {formatTimeAgo(data?.createdAt)}
        </span>
      </div>
    </div>
  );
}
