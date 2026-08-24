import * as React from 'react';
import { IconProps } from './types';

export const StarHalf20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarHalf20"
      {...props}
    >
      <path
        d="M18.807 7.072c-.166-.513-.602-.875-1.136-.944l-4.479-.587-1.945-4.051c-.233-.482-.71-.782-1.247-.782-.536 0-1.014.299-1.247.782L6.807 5.542l-4.478.586c-.535.07-.97.431-1.137.944-.165.512-.025 1.059.366 1.427l3.272 3.086-.82 4.406c-.099.527.11 1.051.543 1.367.243.177.527.267.813.267.225 0 .45-.056.658-.168L10 15.315l3.974 2.142c.475.256 1.038.218 1.473-.099.434-.316.642-.84.544-1.368l-.82-4.406 3.271-3.085c.391-.369.531-.916.366-1.427zm-4.717 3.467c-.342.324-.495.793-.409 1.255l.788 4.227-3.813-2.055c-.205-.111-.43-.166-.656-.166V2.36l1.87 3.892c.202.421.601.708 1.065.77l4.291.562-3.136 2.956v-.001z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarHalf20.category = 'Interface General';

export default StarHalf20;
