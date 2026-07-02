import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM13.25 8.95898C13.8022 8.95898 14.2498 9.40685 14.25 9.95898C14.25 10.5113 13.8023 10.959 13.25 10.959H6.75C6.19772 10.959 5.75 10.5113 5.75 9.95898C5.75018 9.40685 6.19783 8.95898 6.75 8.95898H13.25Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBold20.category = 'Interface General';

export default MinusCircleBold20;
