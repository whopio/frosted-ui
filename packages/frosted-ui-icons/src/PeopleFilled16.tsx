import * as React from 'react';
import { IconProps } from './types';

export const PeopleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PeopleFilled16"
      {...props}
    >
      <path
        d="M6 9.5c2.471 0 4.392 1.951 4.877 3.82.26 1.004-.613 1.68-1.377 1.68h-7c-.764 0-1.637-.676-1.377-1.68l.05-.175C1.729 11.332 3.606 9.5 6 9.5zm5.839 2.18c-.434-.836.105-1.861.887-1.335 1.103.742 1.89 1.873 2.175 2.975.26 1.004-.612 1.68-1.377 1.68-.648 0-1.086-.739-1.1-1.387-.005-.217-.035-.44-.095-.67-.11-.422-.275-.848-.49-1.262zM5.995 1.5C7.86 1.5 9.37 3.011 9.37 4.875S7.86 8.25 5.995 8.25c-1.864 0-3.375-1.511-3.375-3.375S4.131 1.5 5.995 1.5zm4.025 0c1.863 0 3.375 1.511 3.375 3.375S11.883 8.25 10.02 8.25c-.201 0-.29-.24-.166-.398.637-.824 1.016-1.856 1.016-2.977 0-1.122-.378-2.156-1.015-2.98-.123-.158-.035-.395.165-.395z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PeopleFilled16.category = 'People';

export default PeopleFilled16;
