import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5519 7.55157C12.8446 7.25867 12.8447 6.78387 12.5519 6.49103C12.259 6.19834 11.7842 6.19834 11.4913 6.49103L6.84486 11.1375C6.3569 11.6256 6.35699 12.417 6.84486 12.9051L11.4913 17.5516C11.7842 17.8445 12.259 17.8445 12.5519 17.5516C12.8446 17.2587 12.8447 16.7839 12.5519 16.491L8.08217 12.0213L12.5519 7.55157ZM17.3019 7.55157C17.5946 7.25867 17.5947 6.78387 17.3019 6.49103C17.009 6.19835 16.5342 6.19834 16.2413 6.49103L11.5949 11.1375C11.1069 11.6256 11.107 12.417 11.5949 12.9051L16.2413 17.5516C16.5342 17.8445 17.009 17.8445 17.3019 17.5516C17.5946 17.2587 17.5947 16.7839 17.3019 16.491L12.8322 12.0213L17.3019 7.55157Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall24.category = 'Arrows';

export default DoubleChevronLeftSmall24;
