import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.2935 8.44279C17.684 8.05265 18.3171 8.05253 18.7075 8.44279C19.0978 8.83321 19.0977 9.46635 18.7075 9.85685L11.0464 17.518C10.4688 18.0956 9.53231 18.0955 8.95461 17.518L1.29347 9.85685C0.90301 9.46632 0.902969 8.83329 1.29347 8.44279C1.68401 8.05268 2.31714 8.05246 2.70754 8.44279L10.0005 15.7358L17.2935 8.44279ZM17.2935 2.2963C17.684 1.90609 18.3171 1.90602 18.7075 2.2963C19.0978 2.68675 19.0977 3.31987 18.7075 3.71037L11.0464 11.3715C10.4688 11.9491 9.53231 11.949 8.95461 11.3715L1.29347 3.71037C0.90301 3.31984 0.902969 2.68681 1.29347 2.2963C1.684 1.90612 2.31711 1.90595 2.70754 2.2963L10.0005 9.58927L17.2935 2.2963Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;
