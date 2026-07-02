import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 16.5585C9.99997 17.4772 8.9033 17.9527 8.23243 17.3251L1.45606 10.9863C0.885742 10.4527 0.88574 9.54712 1.45606 9.0136L8.23243 2.67473C8.9033 2.04715 9.99997 2.52269 10 3.44133V6.51262C13.6246 6.64395 15.9244 7.74318 17.2939 9.5468C18.7204 11.4255 19 13.9038 19 16.2861C18.9998 16.5983 18.806 16.8774 18.5137 16.9872C18.2212 17.0971 17.8913 17.0144 17.6856 16.7792C15.3572 14.1183 12.778 13.5803 10 13.5097V16.5585Z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled20.category = 'Arrows';

export default ReplyFilled20;
