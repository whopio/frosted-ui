import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.13611 13.8694C6.91953 15.3809 9.08121 15.3809 9.86463 13.8694L14.725 4.49047C15.7691 2.47547 13.673 0.279372 11.6117 1.22875L8.19471 2.80297C8.07217 2.85941 7.93054 2.85937 7.80799 2.80297L4.38807 1.22777C2.32674 0.278916 0.230575 2.47562 1.27479 4.49047L6.13611 13.8694ZM8.53357 13.1789C8.30975 13.6108 7.69199 13.6108 7.46814 13.1789L2.60682 3.80004C2.2197 3.05309 2.99694 2.23917 3.76111 2.59105L7.18104 4.16527C7.2047 4.17617 7.22932 4.18466 7.2533 4.19457V7.23558C7.25333 7.64978 7.5891 7.98558 8.0033 7.98558C8.41745 7.98552 8.75328 7.64974 8.7533 7.23558V4.19359C8.77628 4.18405 8.79994 4.17572 8.82264 4.16527L12.2396 2.59105C13.0036 2.23957 13.7809 3.05417 13.3939 3.80101L8.53357 13.1789Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDown16.category = 'Communication';

export default PaperAirplaneDown16;
