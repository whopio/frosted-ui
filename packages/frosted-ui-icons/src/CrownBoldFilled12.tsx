import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.2816 9.99999C11.2814 11.1044 10.3861 12 9.2816 12H2.72697C1.69177 11.9996 0.840118 11.2124 0.737737 10.2041L0.726995 9.99999H11.2816ZM4.21524 1.34187C4.95224 -0.132118 7.05617 -0.131937 7.79333 1.34187L8.66051 3.07818C9.93087 1.69262 12.2754 2.78562 11.9837 4.68461L11.474 8.00001H0.534614L0.0248534 4.68461C-0.266633 2.78607 2.07659 1.6939 3.34709 3.07818L4.21524 1.34187Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CrownBoldFilled12.category = 'Objects';

export default CrownBoldFilled12;
