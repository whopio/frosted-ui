import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.6557 12.2077C19.4456 11.2809 19.4455 8.72063 17.6557 7.79366L5.17324 1.33175C2.73978 0.0721645 0.10393 2.63755 1.29726 5.10421L3.30214 9.24581L9.24941 9.24581C9.66352 9.24593 9.99941 9.58167 9.99941 9.99581C9.99938 10.4099 9.6635 10.7457 9.24941 10.7458L3.30507 10.7458L1.29628 14.8982C0.103945 17.3645 2.73921 19.9287 5.17226 18.6696L17.6557 12.2077Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled20.category = 'Communication';

export default PaperAirplaneRightFilled20;
