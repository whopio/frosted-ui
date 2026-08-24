import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBoldFilled24"
      {...props}
    >
      <path
        d="M2.5 3.25c-.829 0-1.5.672-1.5 1.5v8.625c0 1.864 1.51 3.375 3.375 3.375h13.351l-1.757 1.66c-.602.568-.63 1.518-.06 2.12.568.602 1.519.63 2.12.06l4.5-4.25c.3-.282.47-.677.47-1.09 0-.413-.17-.807-.47-1.09l-4.5-4.25c-.601-.57-1.552-.542-2.12.06-.57.602-.542 1.552.06 2.12l1.757 1.66H4.375c-.208 0-.375-.168-.375-.375V4.75c0-.828-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled24.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled24;
