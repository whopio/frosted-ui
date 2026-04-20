import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 11.75C18.5523 11.75 19 12.1978 19 12.75V14.5C18.9999 16.9853 16.9852 19 14.5 19H5.5C3.01475 19 1.00005 16.9853 1 14.5V12.75C1 12.1978 1.44772 11.75 2 11.75C2.55228 11.75 3 12.1978 3 12.75V14.5C3.00005 15.8807 4.11932 17 5.5 17H14.5C15.8807 17 16.9999 15.8807 17 14.5V12.75C17 12.1978 17.4477 11.75 18 11.75ZM12.293 1.29302C12.6835 0.902491 13.3165 0.902491 13.707 1.29302L16.707 4.29302C17.0975 4.68354 17.0975 5.31657 16.707 5.70708L13.707 8.70708C13.3165 9.09755 12.6835 9.09755 12.293 8.70708C11.9025 8.31657 11.9025 7.68354 12.293 7.29302L13.5859 6.00005H11.5C10.1193 6.00005 9 7.11933 9 8.50005V13C8.99993 13.5523 8.55224 14 8 14C7.44776 14 7.00007 13.5523 7 13V8.50005C7 6.01477 9.01472 4.00005 11.5 4.00005H13.5859L12.293 2.70708C11.9025 2.31657 11.9025 1.68354 12.293 1.29302Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBold20.category = 'Arrows';

export default ArrowUpRightFromBracketBold20;
