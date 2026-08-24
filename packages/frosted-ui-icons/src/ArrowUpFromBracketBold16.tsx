import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketBold16"
      {...props}
    >
      <path
        d="M14 7.75c.552 0 1 .448 1 1v1.75c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5V8.75c0-.552.448-1 1-1s1 .448 1 1v1.75C3 11.88 4.12 13 5.5 13h5c1.38 0 2.5-1.12 2.5-2.5V8.75c0-.552.448-1 1-1zM7.158 1.3c.489-.398 1.194-.398 1.683 0l.101.092 2.903 2.902c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L8.999 4.276V9c0 .552-.448 1-1 1s-1-.448-1-1V4.277l-1.43 1.43c-.391.39-1.024.39-1.415 0-.39-.39-.39-1.023 0-1.414l2.903-2.902.101-.092z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBold16.category = 'Arrows';

export default ArrowUpFromBracketBold16;
