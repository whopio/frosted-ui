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
        d="M17.2935 8.44282C17.684 8.05268 18.3171 8.05256 18.7075 8.44282C19.0978 8.83325 19.0977 9.46638 18.7075 9.85688L11.0464 17.518C10.4688 18.0957 9.53231 18.0956 8.95461 17.518L1.29347 9.85688C0.90301 9.46635 0.902969 8.83332 1.29347 8.44282C1.68401 8.05271 2.31714 8.05249 2.70754 8.44282L10.0005 15.7358L17.2935 8.44282ZM17.2935 2.29633C17.684 1.90612 18.3171 1.90605 18.7075 2.29633C19.0978 2.68679 19.0977 3.3199 18.7075 3.7104L11.0464 11.3715C10.4688 11.9492 9.53231 11.9491 8.95461 11.3715L1.29347 3.7104C0.90301 3.31987 0.902969 2.68684 1.29347 2.29633C1.684 1.90615 2.31711 1.90598 2.70754 2.29633L10.0005 9.5893L17.2935 2.29633Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;
