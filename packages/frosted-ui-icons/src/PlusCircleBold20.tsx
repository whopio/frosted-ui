import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM9.95898 5.75C10.5112 5.75004 10.959 6.19774 10.959 6.75V8.95898H13.25C13.8022 8.95898 14.2498 9.40685 14.25 9.95898C14.25 10.5113 13.8023 10.959 13.25 10.959H10.959V13.25C10.959 13.8023 10.5112 14.25 9.95898 14.25C9.4067 14.25 8.95898 13.8023 8.95898 13.25V10.959H6.75C6.19772 10.959 5.75 10.5113 5.75 9.95898C5.75018 9.40685 6.19783 8.95898 6.75 8.95898H8.95898V6.75C8.95898 6.19772 9.4067 5.75 9.95898 5.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold20.category = 'Product Icons';

export default PlusCircleBold20;
