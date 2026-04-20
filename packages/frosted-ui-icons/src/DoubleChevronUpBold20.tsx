import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.2927 11.5122C17.6831 11.9026 18.3162 11.9024 18.7067 11.5122C19.0973 11.1216 19.0973 10.4886 18.7067 10.0981L11.0456 2.43696C10.4679 1.8595 9.53142 1.85934 8.9538 2.43696L1.29267 10.0981C0.902433 10.4886 0.902452 11.1217 1.29267 11.5122C1.68313 11.9026 2.31621 11.9025 2.70673 11.5122L9.9997 4.21919L17.2927 11.5122ZM17.2927 17.6586C17.6831 18.0491 18.3162 18.0489 18.7067 17.6586C19.0973 17.2681 19.0973 16.6351 18.7067 16.2446L11.0456 8.58345C10.4679 8.00606 9.5314 8.00585 8.9538 8.58345L1.29267 16.2446C0.902456 16.635 0.902525 17.2682 1.29267 17.6586C1.68313 18.049 2.31621 18.0489 2.70673 17.6586L9.9997 10.3657L17.2927 17.6586Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold20.category = 'Arrows';

export default DoubleChevronUpBold20;
