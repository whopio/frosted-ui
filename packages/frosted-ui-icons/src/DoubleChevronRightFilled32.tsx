import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.9139 3.13347C12.4259 2.64531 12.4258 1.854 12.9139 1.3659C13.402 0.877958 14.1934 0.877958 14.6815 1.3659L27.8494 14.5339C28.6619 15.3463 28.6619 16.6638 27.8494 17.4762L14.6815 30.6403C14.1933 31.1283 13.402 31.1284 12.9139 30.6403C12.4259 30.1521 12.4258 29.3608 12.9139 28.8727L25.785 16.0055L12.9139 3.13347ZM3.91389 3.13347C3.42591 2.64531 3.42581 1.854 3.91389 1.3659C4.40201 0.877958 5.19336 0.877958 5.68147 1.3659L18.8494 14.5339C19.6619 15.3463 19.6619 16.6638 18.8494 17.4762L5.68147 30.6403C5.1933 31.1283 4.40198 31.1284 3.91389 30.6403C3.42586 30.1521 3.42582 29.3608 3.91389 28.8727L16.785 16.0055L3.91389 3.13347Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled32.category = 'Arrows';

export default DoubleChevronRightFilled32;
