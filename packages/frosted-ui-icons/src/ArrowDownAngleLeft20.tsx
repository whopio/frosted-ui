import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeft20"
      {...props}
    >
      <path
        d="M18.25 3c.414 0 .75.336.75.75v6.938C19 11.964 17.965 13 16.687 13H3.648l2.616 2.453c.302.283.317.758.034 1.06-.283.302-.758.317-1.06.034l-4-3.75c-.15-.142-.237-.34-.237-.547 0-.207.086-.405.237-.547l4-3.75c.302-.283.777-.268 1.06.034.283.302.268.777-.034 1.06L3.646 11.5h13.041c.45 0 .813-.364.813-.813V3.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeft20.category = 'Arrows';

export default ArrowDownAngleLeft20;
