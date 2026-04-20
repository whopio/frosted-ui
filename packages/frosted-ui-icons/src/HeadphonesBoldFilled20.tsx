import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C13.222 1 15.5496 2.34839 17.0234 4.36523C18.4502 6.31767 19 8.78205 19 11V14.5C19 16.9853 16.9853 19 14.5 19C13.3954 19 12.5 18.1046 12.5 17V12C12.5 10.8954 13.3954 10 14.5 10C15.0155 10 15.5105 10.0875 15.9717 10.2471C15.8618 8.72398 15.416 7.24927 14.6016 6.13477C13.7004 4.90166 12.2779 4 10 4C7.72209 4 6.29959 4.90166 5.39844 6.13477C4.58398 7.24928 4.13726 8.72395 4.02734 10.2471C4.48881 10.0873 4.98418 10 5.5 10C6.60457 10 7.5 10.8954 7.5 12V17C7.5 18.1046 6.60457 19 5.5 19C3.01472 19 1 16.9853 1 14.5V11C1 8.78205 1.54983 6.31767 2.97656 4.36523C4.45041 2.34839 6.77797 1 10 1Z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBoldFilled20.category = 'Sound & Music';

export default HeadphonesBoldFilled20;
