import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.47016 7.71963C8.76306 7.42686 9.23785 7.42678 9.5307 7.71963C9.82331 8.0125 9.82339 8.48735 9.5307 8.78018L6.5307 11.7802C6.23789 12.073 5.76307 12.0728 5.47016 11.7802L2.47016 8.78018C2.17727 8.48728 2.17727 8.01252 2.47016 7.71963C2.76306 7.42686 3.23785 7.42678 3.5307 7.71963L6.00043 10.1894L8.47016 7.71963ZM5.47016 0.219629C5.76306 -0.0731822 6.23784 -0.073237 6.5307 0.219629L9.5307 3.21963C9.82333 3.51251 9.82344 3.98736 9.5307 4.28018C9.23789 4.57299 8.76307 4.57283 8.47016 4.28018L6.00043 1.81045L3.5307 4.28018C3.23789 4.57299 2.76307 4.57283 2.47016 4.28018C2.17727 3.98728 2.17727 3.51252 2.47016 3.21963L5.47016 0.219629Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron12.category = 'Arrows';

export default DoubleChevron12;
