import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 9.30746C2 8.41281 2.38128 7.56057 3.04827 6.96433L7.5341 2.95433C8.93839 1.699 11.0616 1.699 12.4659 2.95433L16.9517 6.96433C17.6187 7.56057 18 8.41281 18 9.30746V15.6428C18 16.9446 16.9447 18 15.6429 18H13.57C13.2386 18 12.97 17.7313 12.97 17.4V12.97C12.97 11.3297 11.6403 9.99998 10 9.99998C8.35971 9.99998 7.03 11.3297 7.03 12.97V17.4C7.03 17.7313 6.76137 18 6.43 18H4.35714C3.05533 18 2 16.9446 2 15.6428V9.30746Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

HomeBoldFilled20.category = 'Buildings';

export default HomeBoldFilled20;
