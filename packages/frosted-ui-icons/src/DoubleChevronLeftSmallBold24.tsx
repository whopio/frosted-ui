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
        d="M12.4788 7.72835C12.8692 7.33782 12.8693 6.70477 12.4788 6.31429C12.0883 5.92406 11.4552 5.92397 11.0647 6.31429L6.41823 10.9608C5.83267 11.5465 5.83282 12.4961 6.41823 13.0819L11.0647 17.7284C11.4552 18.1189 12.0882 18.1189 12.4788 17.7284C12.8692 17.3378 12.8692 16.7048 12.4788 16.3143L8.18581 12.0213L12.4788 7.72835ZM17.7288 7.72835C18.1192 7.33782 18.1193 6.70477 17.7288 6.31429C17.3383 5.92408 16.7052 5.92397 16.3147 6.31429L11.6682 10.9608C11.0827 11.5464 11.0828 12.4961 11.6682 13.0819L16.3147 17.7284C16.7052 18.1189 17.3382 18.1189 17.7288 17.7284C18.1192 17.3378 18.1193 16.7048 17.7288 16.3143L13.4358 12.0213L17.7288 7.72835Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold24.category = 'Arrows';

export default DoubleChevronLeftSmallBold24;
