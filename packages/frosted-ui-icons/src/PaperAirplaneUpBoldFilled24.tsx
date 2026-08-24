import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBoldFilled24"
      {...props}
    >
      <path
        d="M9.232 2.686c1.164-2.248 4.38-2.248 5.543 0l7.811 15.092c1.571 3.035-1.613 6.329-4.699 4.86l-4.885-2.324V12.76c0-.553-.447-1-1-1-.552 0-1 .447-1 1v7.557l-4.885 2.324c-3.087 1.467-6.27-1.827-4.7-4.862L9.232 2.686z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled24.category = 'Communication';

export default PaperAirplaneUpBoldFilled24;
