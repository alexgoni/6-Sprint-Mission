import { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";
import { QueryString } from "@pandamarket-api";

interface PageButtonProps {
  children: ReactNode;
  isFocus?: boolean;
  onClick: () => void;
}

function PageButton({ children, isFocus, onClick }: PageButtonProps) {
  const focusStyle = classNames({
    "bg-main-blue text-white hover:bg-dark-main-blue focus:bg-dark-main-blue":
      isFocus,
    "bg-white text-cool-gray-500 hover:bg-gray-50 focus:bg-gray-50": !isFocus,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex size-10 select-none items-center justify-center rounded-full border border-gray-200 font-semibold ${focusStyle}`}
    >
      {children}
    </button>
  );
}

interface PaginationProps {
  currentPage: number | QueryString;
  totalPages: number;
  handlePageChange: (targetPage: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  const handleButtonClick = (page: number) => {
    handlePageChange(page);
  };

  const handleLeftClick = () => {
    if (Number(currentPage) === 1) return;
    handlePageChange(Number(currentPage) - 1);
  };

  const handleRightClick = () => {
    if (currentPage === totalPages) return;
    handlePageChange(Number(currentPage) + 1);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-1">
      <PageButton onClick={handleLeftClick}>
        <Image
          src="/images/ic_arrow_left.svg"
          alt="left-arrow"
          width={16}
          height={16}
        />
      </PageButton>
      {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, idx) => (
        <PageButton
          key={idx}
          isFocus={idx + 1 === currentPage}
          onClick={() => handleButtonClick(idx + 1)}
        >
          {idx + 1}
        </PageButton>
      ))}
      <PageButton onClick={handleRightClick}>
        <Image
          src="/images/ic_arrow_right.svg"
          alt="right-arrow"
          width={16}
          height={16}
        />
      </PageButton>
    </div>
  );
}
