import * as React from 'react';
import { IconProps } from './types';

export const InboxFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxFilled24"
      {...props}
    >
      <path
        d="M17.195 1.5c2.161 0 4.007 1.56 4.367 3.69l1.316 7.773c.081.482.122.97.122 1.46v3.647c0 2.446-1.983 4.43-4.43 4.43H5.43C2.984 22.5 1 20.516 1 18.07v-3.647c0-.489.041-.978.123-1.46L2.438 5.19C2.8 3.06 4.645 1.5 6.806 1.5h10.39zM6.805 3C5.378 3 4.156 4.03 3.918 5.44L2.637 13h5.344c.718 0 1.257.507 1.46 1.064.268.74.925 1.867 2.553 1.867 1.629 0 2.285-1.128 2.554-1.867.202-.557.741-1.063 1.459-1.063h5.355L20.084 5.44C19.845 4.03 18.624 3 17.195 3H6.805z"
        fill={color}
      />
    </svg>
  );
};

InboxFilled24.category = 'Interface General';

export default InboxFilled24;
