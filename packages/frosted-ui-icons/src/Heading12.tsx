import * as React from 'react';
import { IconProps } from './types';

export const Heading12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Heading12"
      {...props}
    >
      <path
        d="M1 1.79c0-.437.353-.79.79-.79h2.105c.436 0 .79.353.79.79 0 .435-.354.789-.79.789h-.263v2.632h4.736V2.579h-.263c-.436 0-.79-.354-.79-.79 0-.436.354-.789.79-.789h2.105c.436 0 .79.353.79.79 0 .435-.354.789-.79.789h-.263V9.42h.264c.435 0 .789.354.789.79 0 .435-.354.789-.79.789H8.105c-.436 0-.79-.354-.79-.79 0-.435.354-.789.79-.789h.263V6.789H3.632v2.632h.263c.436 0 .79.354.79.79 0 .435-.354.789-.79.789H1.789C1.353 11 1 10.646 1 10.21c0-.435.353-.789.79-.789h.263V2.579h-.264c-.436 0-.789-.354-.789-.79z"
        fill={color}
      />
    </svg>
  );
};

Heading12.category = 'Text Formatting';

export default Heading12;
