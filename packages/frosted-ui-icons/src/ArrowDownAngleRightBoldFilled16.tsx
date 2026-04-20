import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.49969 1.75C1.67126 1.75 0.999687 2.42157 0.999687 3.25V8.5C0.999687 10.0188 2.2309 11.25 3.74969 11.25H9.69305L8.98992 11.8906C8.37753 12.4483 8.3328 13.3973 8.89031 14.0098C9.44804 14.622 10.397 14.6668 11.0095 14.1094L14.5095 10.9219C14.8177 10.6411 14.9956 10.2441 14.9997 9.82715C15.0037 9.4101 14.8338 9.00939 14.5309 8.72266L11.0309 5.41016C10.4293 4.84087 9.47927 4.86726 8.90984 5.46875C8.3405 6.07044 8.36679 7.02043 8.96844 7.58984L9.6657 8.25H3.99969V3.25C3.99969 2.42162 3.32805 1.75008 2.49969 1.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled16.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled16;
