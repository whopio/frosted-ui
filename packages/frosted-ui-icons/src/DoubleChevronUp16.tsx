import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.7176 8.88166C14.0105 9.1746 14.4852 9.17447 14.7782 8.88166C15.0711 8.58882 15.071 8.11404 14.7782 7.82112L8.786 1.826C8.35146 1.39147 7.64628 1.39141 7.21178 1.826L1.21959 7.82112C0.926804 8.11401 0.926802 8.58881 1.21959 8.88166C1.51251 9.17447 1.98729 9.17451 2.28014 8.88166L7.99889 3.16096L13.7176 8.88166ZM13.7176 14.2801C14.0105 14.573 14.4852 14.5729 14.7782 14.2801C15.0711 13.9873 15.071 13.5125 14.7782 13.2196L8.786 7.22444C8.35144 6.78996 7.64625 6.78983 7.21178 7.22444L1.21959 13.2196C0.926824 13.5124 0.926862 13.9872 1.21959 14.2801C1.51251 14.5729 1.98729 14.573 2.28014 14.2801L7.99889 8.5594L13.7176 14.2801Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp16.category = 'Arrows';

export default DoubleChevronUp16;
