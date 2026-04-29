import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.2825 10.1303C13.7705 10.6183 14.5618 10.6182 15.0501 10.1303C15.5381 9.64223 15.538 8.85091 15.0501 8.36269L11.179 4.48867C10.528 3.83742 9.4715 3.83738 8.82057 4.48867L4.94948 8.36269C4.46159 8.85088 4.46149 9.64224 4.94948 10.1303C5.43767 10.6182 6.22901 10.6183 6.71706 10.1303L9.99928 6.84609L13.2825 10.1303ZM13.2825 15.6332C13.7705 16.1213 14.5618 16.1211 15.0501 15.6332C15.5381 15.1452 15.538 14.3538 15.0501 13.8656L11.179 9.9916C10.528 9.34033 9.47151 9.34031 8.82057 9.9916L4.94948 13.8656C4.46154 14.3538 4.46146 15.1452 4.94948 15.6332C5.43769 16.1211 6.22901 16.1212 6.71706 15.6332L9.99928 12.349L13.2825 15.6332Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled20.category = 'Arrows';

export default DoubleChevronUpSmallFilled20;
