import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.636 10.277C13.9289 10.5698 14.4037 10.5697 14.6966 10.277C14.9894 9.98417 14.9893 9.50936 14.6966 9.21644L10.8255 5.34241C10.3698 4.88662 9.62976 4.88656 9.17413 5.34241L5.30304 9.21644C5.01035 9.50932 5.01037 9.98416 5.30304 10.277C5.59597 10.5697 6.07077 10.5698 6.36359 10.277L9.99933 6.63929L13.636 10.277ZM13.636 14.7799C13.9289 15.0728 14.4037 15.0727 14.6966 14.7799C14.9894 14.4871 14.9893 14.0123 14.6966 13.7194L10.8255 9.84535C10.3698 9.38948 9.62978 9.38946 9.17413 9.84535L5.30304 13.7194C5.01032 14.0123 5.01031 14.4871 5.30304 14.7799C5.59597 15.0727 6.07077 15.0727 6.36359 14.7799L9.99933 11.1422L13.636 14.7799Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall20.category = 'Arrows';

export default DoubleChevronUpSmall20;
