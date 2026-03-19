import * as React from 'react';
import { IconProps } from './types';

export const GridBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.88965 7C4.05497 7 5 7.94503 5 9.11035V9.88965C5 11.055 4.05497 12 2.88965 12H2.11035C0.945031 12 0 11.055 0 9.88965V9.11035C0 7.94503 0.945031 7 2.11035 7H2.88965ZM9.88965 7C11.055 7 12 7.94503 12 9.11035V9.88965C12 11.055 11.055 12 9.88965 12H9.11035C7.94503 12 7 11.055 7 9.88965V9.11035C7 7.94503 7.94503 7 9.11035 7H9.88965ZM2.88965 0C4.05497 0 5 0.945031 5 2.11035V2.88965C5 4.05497 4.05497 5 2.88965 5H2.11035C0.945031 5 0 4.05497 0 2.88965V2.11035C0 0.945031 0.945031 0 2.11035 0H2.88965ZM9.88965 0C11.055 0 12 0.945031 12 2.11035V2.88965C12 4.05497 11.055 5 9.88965 5H9.11035C7.94503 5 7 4.05497 7 2.88965V2.11035C7 0.945031 7.94503 0 9.11035 0H9.88965Z"
        fill={color}
      />
    </svg>
  );
};

GridBoldFilled12.category = 'Product Icons';

export default GridBoldFilled12;
