import * as React from 'react';
import { IconProps } from './types';

export const HandWave32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.27908 15.7643C6.49802 14.9833 5.2317 14.9833 4.45065 15.7643C3.6696 16.5454 3.6696 17.8117 4.45065 18.5927L10.5789 24.721C14.4841 28.6262 20.8158 28.6262 24.721 24.721C28.6263 20.8158 28.6263 14.4841 24.721 10.5789L19.7713 5.62911C19.5109 5.36877 19.0888 5.3688 18.8285 5.62911C17.8447 6.61293 17.4805 7.98166 17.7359 9.25054M7.27908 15.7643L5.39346 13.8787C4.61241 13.0976 4.61241 11.8313 5.39346 11.0503C6.17448 10.2692 7.44083 10.2692 8.22188 11.0503M7.27908 15.7643L11.0503 19.5355M17.7359 9.25054L13.8787 5.39341C13.0977 4.61236 11.8313 4.61239 11.0503 5.39341C10.2693 6.17443 10.2693 7.44079 11.0503 8.22184M17.7359 9.25054C17.886 9.99636 18.2502 10.7076 18.8285 11.286L20.0611 12.5186C20.1708 12.6282 20.2026 12.7936 20.1415 12.9362C19.3485 14.7866 19.762 16.9335 21.1855 18.357M8.22188 11.0503L7.27908 10.1075C6.49802 9.32641 6.49805 8.06005 7.27908 7.27903C8.0601 6.49801 9.32645 6.49798 10.1075 7.27903L11.0503 8.22184M8.22188 11.0503L12.9359 15.7643M11.0503 8.22184L15.7644 12.9359"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.9304 7.19684C26.4513 5.69401 24.9548 4.4217 23.1279 4.2251M3.87756 23.1487C4.09051 24.4515 5.63302 26.5549 7.32544 27.0574"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HandWave32;
