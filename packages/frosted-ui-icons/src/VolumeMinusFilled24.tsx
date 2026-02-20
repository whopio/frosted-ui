import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.78613 1.68225C11.3813 0.180231 13.9999 1.3114 14 3.50256V20.4977C13.9998 22.6889 11.3813 23.8195 9.78613 22.317L5.78027 18.5446C5.40932 18.1952 4.91875 17.9997 4.40918 17.9996H3.25C1.45507 17.9996 0 16.5446 0 14.7496V9.24963C0.000233069 7.45491 1.45522 5.99963 3.25 5.99963H4.40918C4.91878 5.99953 5.40932 5.80511 5.78027 5.45569L9.78613 1.68225ZM23.25 11.2496C23.6641 11.2496 23.9998 11.5856 24 11.9996C24 12.4138 23.6642 12.7496 23.25 12.7496H18.25C17.8358 12.7496 17.5 12.4138 17.5 11.9996C17.5002 11.5856 17.8359 11.2496 18.25 11.2496H23.25Z"
        fill={color}
      />
    </svg>
  );
};

VolumeMinusFilled24.category = 'Sound & Music';

export default VolumeMinusFilled24;
