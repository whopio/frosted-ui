import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.8776 15.0414C22.269 14.6521 22.9021 14.6532 23.2917 15.0443C23.6814 15.4356 23.6801 16.0696 23.2888 16.4594L17.1755 22.5473C16.5252 23.1942 15.474 23.1945 14.8239 22.5473L8.71064 16.4594C8.31949 16.0698 8.31842 15.4357 8.70771 15.0443C9.09744 14.653 9.73144 14.6517 10.1228 15.0414L15.9997 20.8949L21.8776 15.0414ZM21.8776 9.29141C22.269 8.90212 22.9021 8.90322 23.2917 9.29434C23.6814 9.68565 23.6801 10.3197 23.2888 10.7094L17.1755 16.7973C16.5252 17.4442 15.474 17.4445 14.8239 16.7973L8.71064 10.7094C8.31948 10.3198 8.31842 9.68568 8.70771 9.29434C9.09744 8.90305 9.73144 8.90171 10.1228 9.29141L15.9997 15.1449L21.8776 9.29141Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold32.category = 'Arrows';

export default DoubleChevronDownSmallBold32;
