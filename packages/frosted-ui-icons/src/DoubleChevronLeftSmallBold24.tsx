import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.4787 7.72835C12.869 7.33782 12.8691 6.70477 12.4787 6.31429C12.0881 5.92406 11.455 5.92397 11.0646 6.31429L6.41811 10.9608C5.83255 11.5465 5.8327 12.4961 6.41811 13.0819L11.0646 17.7284C11.4551 18.1189 12.0881 18.1189 12.4787 17.7284C12.8691 17.3378 12.8691 16.7048 12.4787 16.3143L8.18568 12.0213L12.4787 7.72835ZM17.7287 7.72835C18.1191 7.33782 18.1191 6.70477 17.7287 6.31429C17.3381 5.92408 16.705 5.92397 16.3146 6.31429L11.6681 10.9608C11.0826 11.5464 11.0827 12.4961 11.6681 13.0819L16.3146 17.7284C16.7051 18.1189 17.3381 18.1189 17.7287 17.7284C18.1191 17.3378 18.1191 16.7048 17.7287 16.3143L13.4357 12.0213L17.7287 7.72835Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold24.category = 'Arrows';

export default DoubleChevronLeftSmallBold24;
