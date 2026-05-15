import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.2927 8.44315C17.6831 8.05273 18.3162 8.05293 18.7067 8.44315C19.0973 8.83367 19.0973 9.46669 18.7067 9.85721L11.0456 17.5183C10.4679 18.0958 9.53142 18.096 8.9538 17.5183L1.29267 9.85721C0.902433 9.46675 0.902452 8.83362 1.29267 8.44315C1.68313 8.05276 2.31621 8.05285 2.70673 8.44315L9.9997 15.7361L17.2927 8.44315ZM17.2927 2.29667C17.6831 1.90624 18.3162 1.90644 18.7067 2.29667C19.0973 2.68719 19.0973 3.3202 18.7067 3.71073L11.0456 11.3719C10.4679 11.9492 9.5314 11.9495 8.9538 11.3719L1.29267 3.71073C0.902456 3.32029 0.902525 2.68715 1.29267 2.29667C1.68313 1.90627 2.31621 1.90637 2.70673 2.29667L9.9997 9.58963L17.2927 2.29667Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;
