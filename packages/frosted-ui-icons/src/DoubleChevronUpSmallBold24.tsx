import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.2934 12.4999C16.6839 12.8903 17.317 12.8904 17.7074 12.4999C18.0977 12.1094 18.0978 11.4763 17.7074 11.0858L13.061 6.43935C12.4753 5.85379 11.5256 5.85394 10.9399 6.43935L6.29338 11.0858C5.90286 11.4763 5.90286 12.1094 6.29338 12.4999C6.6839 12.8903 7.31695 12.8904 7.70744 12.4999L12.0004 8.20692L16.2934 12.4999ZM16.2934 17.7499C16.6839 18.1403 17.317 18.1404 17.7074 17.7499C18.0976 17.3594 18.0978 16.7263 17.7074 16.3358L13.061 11.6893C12.4753 11.1038 11.5256 11.104 10.9399 11.6893L6.29338 16.3358C5.90286 16.7263 5.90286 17.3594 6.29338 17.7499C6.6839 18.1403 7.31695 18.1404 7.70744 17.7499L12.0004 13.4569L16.2934 17.7499Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold24.category = 'Arrows';

export default DoubleChevronUpSmallBold24;
