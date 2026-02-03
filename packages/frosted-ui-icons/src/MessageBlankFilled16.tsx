import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_6949_97)">
        <path
          d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C7.19254 16 6.41195 15.8799 5.67578 15.6562C4.83881 15.4019 4.11444 15.2707 3.46875 15.4434C3.07888 15.5476 2.70298 15.6613 2.35742 15.7734C1.69368 15.9886 1.05773 15.7335 0.662109 15.3379C0.26651 14.9423 0.0113202 14.3063 0.226562 13.6426C0.338703 13.2969 0.452525 12.9207 0.556641 12.5303C0.728836 11.8845 0.597691 11.1608 0.34375 10.3242C0.120282 9.58805 0 8.80729 0 8C0 3.58177 3.58182 9.74259e-05 8 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6949_97">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

MessageBlankFilled16.category = 'Communication';

export default MessageBlankFilled16;
