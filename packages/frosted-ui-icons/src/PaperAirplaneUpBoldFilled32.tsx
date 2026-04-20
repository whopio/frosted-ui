import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5427 3.10461C13.994 0.298671 18.0075 0.298581 19.4587 3.10461L30.4753 24.4083C32.4749 28.2751 28.3664 32.4457 24.4704 30.504L16.9987 26.7784V16.7198C16.9987 16.1677 16.5508 15.72 15.9987 15.7198C15.4464 15.7198 14.9987 16.1676 14.9987 16.7198V26.7823L7.52704 30.506C3.63085 32.4472 -0.476707 28.2768 1.52313 24.4103L12.5427 3.10461Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled32.category = 'Communication';

export default PaperAirplaneUpBoldFilled32;
