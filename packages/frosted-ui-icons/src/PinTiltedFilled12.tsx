import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.37793 1.36829C7.06135 0.684869 8.1701 0.684869 8.85352 1.36829L10.6211 3.13586C11.3044 3.81928 11.3044 4.9271 10.6211 5.61047L8.91113 7.32043C8.85368 7.37804 8.8127 7.45049 8.79297 7.52942L8.24121 9.73547C7.9113 11.0551 6.26752 11.5107 5.30566 10.549L3.90332 9.14563L2.3125 10.7374C2.01967 11.03 1.54479 11.03 1.25195 10.7374C0.95906 10.4445 0.95906 9.9688 1.25195 9.6759L2.84277 8.08508L1.44043 6.68274C0.4787 5.72092 0.933429 4.07719 2.25293 3.74719L4.45898 3.19543C4.538 3.17568 4.61131 3.13481 4.66895 3.07727L6.37793 1.36829Z"
        fill={color}
      />
    </svg>
  );
};

PinTiltedFilled12.category = 'Interface General';

export default PinTiltedFilled12;
