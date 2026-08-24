import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBoldFilled24"
      {...props}
    >
      <path
        d="M17.857 1.644c2.76-.877 5.36 1.724 4.483 4.484l-4.886 15.367c-1.035 3.257-5.615 3.334-6.76.114l-1.81-5.097 5.343-5.342c.39-.39.39-1.024 0-1.415-.39-.39-1.024-.39-1.414 0L7.468 15.1l-5.097-1.812c-3.22-1.145-3.141-5.725.114-6.76l15.372-4.884z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled24.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled24;
