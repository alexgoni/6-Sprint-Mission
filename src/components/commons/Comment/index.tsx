import Image from "next/image";

export default function Comment() {
  return (
    <div className="mb-4 border-b md:mb-6">
      <div className="flex items-center justify-between">
        <span className="text-cool-gray-800 ">
          혹시 사용기간이 어떻게 되실까요?
        </span>
        <Image src="/images/ic_kebab.svg" alt="kebab" width={24} height={24} />
      </div>

      <div className="my-4 grid w-max grid-cols-2-auto grid-rows-2 gap-x-2 md:my-6">
        <Image
          src="/images/profile.svg"
          alt="profile"
          width={32}
          height={32}
          className="row-span-2 size-8 place-self-center rounded-full object-cover"
        />
        <span className="text-sm text-cool-gray-600">상큼한판다</span>
        <span className="text-xs text-cool-gray-400">1시간 전</span>
      </div>
    </div>
  );
}
