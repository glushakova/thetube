import { FC, memo } from "react";

const upDownSvg: FC = memo(() => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 10l5 5 5-5z"
        stroke="black"
        strokeWidth="1"
        fill="black"
        opacity="0.55"
      />
    </svg>
  );
});

export default upDownSvg;
