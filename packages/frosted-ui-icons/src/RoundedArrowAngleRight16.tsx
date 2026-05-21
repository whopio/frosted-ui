import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.87838 14.9988C3.18524 14.9988 1.00163 12.8159 1.00143 10.1228C1.00152 7.42962 3.18518 5.24585 5.87838 5.24585H12.436L9.47213 2.28003C9.17938 1.98711 9.17932 1.5123 9.47213 1.21948C9.76509 0.927038 10.24 0.926749 10.5327 1.21948L14.7827 5.47144C15.0752 5.76416 15.0749 6.23911 14.7827 6.53198L10.5327 10.7839C10.2399 11.0768 9.76509 11.0767 9.47213 10.7839C9.1794 10.4911 9.17941 10.0163 9.47213 9.72339L12.4477 6.74585H5.87838C4.0136 6.74585 2.50152 8.25805 2.50143 10.1228C2.50163 11.9875 4.01367 13.4988 5.87838 13.4988H7.24948C7.66339 13.499 7.99925 13.8349 7.99948 14.2488C7.99948 14.6629 7.66353 14.9986 7.24948 14.9988H5.87838Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight16.category = 'Arrows';

export default RoundedArrowAngleRight16;
