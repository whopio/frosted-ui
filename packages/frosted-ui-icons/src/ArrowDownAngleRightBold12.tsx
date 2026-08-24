import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBold12"
      {...props}
    >
      <path
        d="M1 1.25c-.552 0-1 .448-1 1v4.063C0 7.383.868 8.25 1.938 8.25h6.69l-.781.802c-.385.395-.378 1.028.017 1.414.396.385 1.029.377 1.414-.018l2.438-2.5c.379-.388.379-1.008 0-1.396l-2.438-2.5c-.385-.395-1.018-.403-1.414-.018-.395.386-.402 1.019-.017 1.414l.781.802H2v-4c0-.552-.448-1-1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBold12.category = 'Arrows';

export default ArrowDownAngleRightBold12;
