import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBold24"
      {...props}
    >
      <path
        d="M17.857 1.643c2.76-.877 5.36 1.724 4.483 4.484l-4.886 15.368c-1.035 3.256-5.615 3.334-6.759.114L8.66 15.877c-.091-.256-.293-.458-.55-.55l-5.738-2.04c-3.22-1.145-3.142-5.725.115-6.76l15.371-4.884zm2.577 3.878c.386-1.213-.758-2.358-1.971-1.973L3.09 8.434c-1.43.454-1.464 2.465-.05 2.968l5.739 2.04c.083.03.165.065.244.101l3.788-3.788c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-3.786 3.787c.037.082.072.165.103.25l2.037 5.733c.503 1.414 2.515 1.38 2.97-.05l4.884-15.368z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBold24.category = 'Communication';

export default PaperAirplaneUpRightBold24;
