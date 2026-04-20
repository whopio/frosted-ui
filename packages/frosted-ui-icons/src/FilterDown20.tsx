import * as React from 'react';
import { IconProps } from './types';

export const FilterDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 15C12.4142 15 12.75 15.3358 12.75 15.75C12.75 16.1642 12.4142 16.5 12 16.5H8C7.58579 16.5 7.25 16.1642 7.25 15.75C7.25 15.3358 7.58579 15 8 15H12ZM14.75 9.25C15.1642 9.25 15.5 9.58579 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10C4.5 9.58579 4.83579 9.25 5.25 9.25H14.75ZM17.5 3.5C17.9142 3.5 18.25 3.83579 18.25 4.25C18.25 4.66421 17.9142 5 17.5 5H2.5C2.08579 5 1.75 4.66421 1.75 4.25C1.75 3.83579 2.08579 3.5 2.5 3.5H17.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

FilterDown20.category = 'Text Formatting';

export default FilterDown20;
