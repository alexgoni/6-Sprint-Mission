import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Size } from "@size";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

function getFormInputClassnames(error: boolean | undefined = false) {
  return classNames(
    "h-[56px] w-full rounded-xl bg-cool-gray-300 indent-6 outline-none placeholder:text-cool-gray-400",
    {
      "focus:border-2 focus:border-main-blue": !error,
      "border-2 border-error focus:border-error": error,
    },
  );
}

export function TextInput({ ...args }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      {...args}
      required
      className={getFormInputClassnames()}
    />
  );
}

export function EmailInput({ error, ...args }: AuthInputProps) {
  return (
    <input
      type="email"
      {...args}
      required
      className={getFormInputClassnames(error)}
    />
  );
}

export function PWInput({ error, ...args }: AuthInputProps) {
  const [pwClose, setPwClose] = useState(true);

  const togglePWEye = () => {
    setPwClose((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={pwClose ? "password" : "text"}
        {...args}
        required
        className={getFormInputClassnames(error)}
      />
      <Image
        src={pwClose ? "/images/pw_eye.svg" : "images/pw_eye-open.svg"}
        alt="pw-eye"
        width={24}
        height={24}
        onClick={togglePWEye}
        className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
}

interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size: Size;
}

export function TextareaInput({ size, ...args }: TextareaInputProps) {
  const classnames = classNames(
    "w-full rounded-xl border-none  bg-cool-gray-300 px-6 py-4 outline-none placeholder:text-cool-gray-400 focus:border-2 focus:border-main-blue",
    {
      "h-[104px]": size === "sm",
      "h-[200px]": size === "lg",
      "h-[282px]": size === "xl",
    },
  );

  return <textarea {...args} required className={classnames} />;
}
