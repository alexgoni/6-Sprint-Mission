import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleImgChange: (file: File | null) => void;
}

export default function ImageInput({
  handleImgChange,
  ...args
}: ImageInputProps) {
  const [preview, setPreview] = useState("");
  const imgFileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    imgFileRef.current?.click();
  };

  const handleImgFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    const file = files[0];

    handleImgChange(file);

    const nextPreview = URL.createObjectURL(file);
    setPreview(nextPreview);
  };

  const handleImgFileDelete = () => {
    const inputNode = imgFileRef.current;

    if (!inputNode) return;

    inputNode.value = "";
    handleImgChange(null);
    setPreview("");
  };

  useEffect(() => {
    const revokePreview = () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };

    return revokePreview;
  }, [preview]);

  return (
    <div className="grid auto-rows-auto grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 xl:gap-6">
      <button
        type="button"
        onClick={handleClick}
        className="relative flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-xl border-none bg-cool-gray-300 object-cover outline-none"
      >
        <input
          type="file"
          accept="image/png, image/jpeg"
          {...args}
          onChange={handleImgFileChange}
          ref={imgFileRef}
          className="hidden"
        />
        <Image src="/images/ic_plus.svg" alt="img" width={48} height={48} />
        <h1 className="text-cool-gray-400">이미지 등록</h1>
      </button>
      {preview && <PreviewImage img={preview} onDelete={handleImgFileDelete} />}
    </div>
  );
}

interface PreviewImageProps {
  img: string;
  onDelete: () => void;
}

function PreviewImage({ img, onDelete }: PreviewImageProps) {
  return (
    <div className="relative aspect-square w-full rounded-xl object-cover">
      <Image
        src={img}
        alt="img-file"
        fill
        className="absolute size-full rounded-xl object-cover"
      />
      <Image
        src="/images/ic_X.svg"
        alt="x"
        width={20}
        height={20}
        onClick={onDelete}
        className="absolute right-3 top-3 cursor-pointer fill-cool-gray-400"
      />
    </div>
  );
}
