import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold20"
      {...props}
    >
      <path
        d="M6 10.306v6.547C6 17.486 6.513 18 7.147 18h5.705c.634 0 1.148-.514 1.148-1.147v-6.547c0-.169.137-.306.306-.306h2.672c.405 0 .611-.485.332-.777l-6.648-6.932c-.361-.377-.963-.377-1.325 0L2.69 9.223c-.28.292-.073.777.331.777h2.673c.169 0 .306.137.306.306z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold20.category = 'Arrows';

export default ArrowFatUpBold20;
