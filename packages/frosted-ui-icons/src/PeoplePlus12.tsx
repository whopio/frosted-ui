import * as React from 'react';
import { IconProps } from './types';

export const PeoplePlus12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M7 6.68807C6.39632 5.63541 5.33252 4.94889 4.12883 5.00298C2.36196 5.08203 1 6.81705 1 8.81836C1 9.47159 1.46748 10 2.0454 10H4.83681M6 5.22241C6.39451 4.50412 7.32075 4 8.39708 4C9.54202 4 10.5154 4.56672 10.8628 5.3575C10.9528 5.55848 11 5.77595 11 6M9 7V11M7 9H11M5 2C5 2.55228 4.55228 3 4 3C3.44772 3 3 2.55228 3 2C3 1.44772 3.44772 1 4 1C4.55228 1 5 1.44772 5 2ZM9 1.5C9 1.77614 8.77614 2 8.5 2C8.22386 2 8 1.77614 8 1.5C8 1.22386 8.22386 1 8.5 1C8.77614 1 9 1.22386 9 1.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PeoplePlus12;
