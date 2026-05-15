import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.4486 7.55157C11.1559 7.25867 11.1558 6.78387 11.4486 6.49103C11.7415 6.19834 12.2163 6.19834 12.5091 6.49103L17.1556 11.1375C17.6436 11.6256 17.6435 12.417 17.1556 12.9051L12.5091 17.5516C12.2163 17.8445 11.7415 17.8445 11.4486 17.5516C11.1559 17.2587 11.1558 16.7839 11.4486 16.491L15.9183 12.0213L11.4486 7.55157ZM6.69859 7.55157C6.40586 7.25867 6.40575 6.78387 6.69859 6.49103C6.99145 6.19835 7.46629 6.19834 7.75914 6.49103L12.4056 11.1375C12.8936 11.6256 12.8935 12.417 12.4056 12.9051L7.75914 17.5516C7.46625 17.8445 6.99149 17.8445 6.69859 17.5516C6.40586 17.2587 6.40576 16.7839 6.69859 16.491L11.1683 12.0213L6.69859 7.55157Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall24.category = 'Arrows';

export default DoubleChevronRightSmall24;
