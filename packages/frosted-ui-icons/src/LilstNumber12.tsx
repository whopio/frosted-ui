import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber12 = ({
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
        d="M9.125 10.125H2.875C2.32271 10.125 1.875 9.6773 1.875 9.125V2.875C1.875 2.32271 2.32271 1.875 2.875 1.875H9.125C9.6773 1.875 10.125 2.32271 10.125 2.875V9.125C10.125 9.6773 9.6773 10.125 9.125 10.125zM6.1875 7.58335H8.21875M6.1875 4.41669H8.21875M4.07812 7.58335H4.17188M4.07812 4.41669H4.17188"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LilstNumber12;
