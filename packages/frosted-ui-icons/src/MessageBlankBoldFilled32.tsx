import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31.0007 15.9277C31.0006 24.1717 24.317 30.8553 16.073 30.8555C13.886 30.8554 11.8063 30.3839 9.93237 29.5371C8.47847 29.8554 6.99408 30.2189 5.6853 30.5576L4.35815 30.9072C2.38668 31.4358 0.562819 29.6105 1.09155 27.6396C1.5134 26.0681 2.02842 24.0364 2.46069 22.0615C1.61574 20.1892 1.1453 18.1122 1.14526 15.9277C1.14526 7.68354 7.82886 1.00009 16.073 1C24.3171 1.00013 31.0007 7.68358 31.0007 15.9277Z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled32.category = 'Communication';

export default MessageBlankBoldFilled32;
