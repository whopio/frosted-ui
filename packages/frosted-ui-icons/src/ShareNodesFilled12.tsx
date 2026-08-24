import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled12"
      {...props}
    >
      <path
        d="M9.25 0C10.769 0 12 1.231 12 2.75S10.769 5.5 9.25 5.5c-.846 0-1.602-.383-2.106-.984l-1.718.859c.047.201.074.41.074.625 0 .215-.028.423-.074.624l1.718.86c.504-.601 1.26-.984 2.106-.984C10.769 6.5 12 7.731 12 9.25S10.769 12 9.25 12 6.5 10.769 6.5 9.25c0-.135.013-.267.031-.396L4.7 7.938c-.498.5-1.187.812-1.949.812C1.231 8.75 0 7.519 0 6s1.231-2.75 2.75-2.75c.762 0 1.451.31 1.95.812l1.831-.916c-.018-.13-.031-.262-.031-.396C6.5 1.231 7.731 0 9.25 0z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled12.category = 'Interface General';

export default ShareNodesFilled12;
