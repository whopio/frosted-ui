import * as React from 'react';
import { IconProps } from './types';

export const Checkmark16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.209 4.23047C12.496 3.93201 12.9709 3.92223 13.2695 4.20898C13.5679 4.49598 13.5777 4.97096 13.291 5.26953L7.04102 11.7695C6.9015 11.9146 6.70906 11.9979 6.50781 12C6.35689 12.0015 6.20989 11.9571 6.08594 11.875L5.96973 11.7803L3.21973 9.03027C2.92684 8.73739 2.92686 8.26262 3.21973 7.96973C3.51262 7.67683 3.98738 7.67683 4.28027 7.96973L6.48926 10.1797L9.08398 7.48047L12.209 4.23047Z"
        fill={color}
      />
    </svg>
  );
};

export default Checkmark16;
