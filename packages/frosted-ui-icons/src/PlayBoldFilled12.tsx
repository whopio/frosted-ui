import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1 2.16843C1 0.482579 2.852 -0.547946 4.28418 0.341285L10.4541 4.17332C11.8084 5.01438 11.8084 6.98557 10.4541 7.82664L4.28418 11.6587C2.85212 12.5479 1.00034 11.5181 1 9.8325V2.16843Z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled12.category = 'Sound & Music';

export default PlayBoldFilled12;
