import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.79785 0.809406C5.06751 -0.269801 6.93249 -0.269803 8.20215 0.809406L10.9434 3.13851C11.6139 3.70849 12 4.54458 12 5.42464V9.49984C12 10.8805 10.8807 11.9998 9.5 11.9998H9.00977C8.45214 11.9997 8.00013 11.5477 8 10.9901V7.99984C8 6.89527 7.10457 5.99984 6 5.99984C4.89543 5.99984 4 6.89527 4 7.99984V10.9901C3.99987 11.5476 3.5479 11.9997 2.99023 11.9998H2.5C1.11929 11.9998 0 10.8805 0 9.49984V5.42464C2.23333e-05 4.54458 0.386102 3.70849 1.05664 3.13851L3.79785 0.809406Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeBoldFilled12.category = 'Buildings';

export default HomeBoldFilled12;
