import * as React from 'react';
import { IconProps } from './types';

export const TagFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.5002 0C18.4329 0.000235797 20 1.56805 20 3.50081V9.35306C19.9998 10.6125 19.499 11.8207 18.6085 12.7113L12.7709 18.5489C11.1114 20.2079 8.42095 20.2077 6.76139 18.5489L1.45208 13.2396C-0.207453 11.5799 -0.207517 8.88874 1.45208 7.22914L7.28968 1.39251C8.18043 0.501795 9.38921 0 10.6489 0H16.5002ZM12.9994 4.24979C11.4807 4.2499 10.2495 5.48101 10.2495 6.99966C10.2495 8.5183 11.4807 9.74942 12.9994 9.74952C14.5181 9.74952 15.7492 8.51837 15.7492 6.99966C15.7492 5.48095 14.5181 4.24979 12.9994 4.24979Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled20.category = 'Interface General';

export default TagFilled20;
