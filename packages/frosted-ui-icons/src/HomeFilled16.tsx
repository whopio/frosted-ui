import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C8.5762 0 9.13465 0.199144 9.58105 0.563477L14.7393 4.77246C15.2209 5.16559 15.5 5.75523 15.5 6.37695V13.5898C15.5 14.3686 14.8686 15 14.0898 15H11.4102C10.6314 15 10 14.3686 10 13.5898V11C9.99999 9.89544 9.10456 9 8 9C6.89544 9 6.00001 9.89544 6 11V13.5898C6 14.3686 5.36857 15 4.58984 15H1.91016C1.13143 15 0.5 14.3686 0.5 13.5898V6.37695C0.5 5.75523 0.779096 5.16559 1.26074 4.77246L6.41895 0.563477C6.86535 0.199144 7.4238 0 8 0Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled16.category = 'Buildings';

export default HomeFilled16;
