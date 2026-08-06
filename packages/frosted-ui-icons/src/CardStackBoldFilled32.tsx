import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled32"
      {...props}
    >
      <path
        d="M25.9986 11C29.0657 11 31.4093 13.7359 30.9391 16.7666L29.3873 26.7666C29.0092 29.2025 26.912 30.9998 24.4469 31H7.55138C5.08639 30.9996 2.98906 29.2025 2.61095 26.7666L1.05821 16.7666C0.588088 13.7361 2.93286 11.0003 5.99962 11H25.9986ZM24.567 6C26.6162 6 28.2763 7.53249 28.5318 9.47266C27.7494 9.16908 26.8963 9.00003 25.9986 9H5.99962C5.10639 9.00005 4.25738 9.16797 3.47814 9.46875C3.73554 7.53087 5.39481 6.00067 7.442 6H24.567ZM20.985 1C22.8713 1.00025 24.4226 2.29706 24.8609 4.00781C24.764 4.00317 24.6661 4.00001 24.568 4H7.44298C7.34152 4.00002 7.24038 4.00285 7.14025 4.00781C7.57858 2.29694 9.12966 1 11.0162 1H20.985Z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled32.category = 'Interface General';

export default CardStackBoldFilled32;
