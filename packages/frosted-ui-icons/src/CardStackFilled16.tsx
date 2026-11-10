import * as React from 'react';
import { IconProps } from './types';

export const CardStackFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackFilled16"
      {...props}
    >
      <path
        d="M12.3 6c1.667 0 2.933 1.497 2.658 3.14l-.606 3.612c-.217 1.298-1.34 2.249-2.657 2.249H4.301c-1.316 0-2.44-.951-2.658-2.249L1.037 9.14C.762 7.497 2.03 6 3.695 6h8.606zm-.585-2.5c1.111 0 2.012.817 2.179 1.858C13.414 5.13 12.874 5 12.3 5H3.695c-.57 0-1.105.127-1.583.354C2.281 4.314 3.18 3.5 4.29 3.5h7.425zM10.116.999c.997 0 1.824.657 2.105 1.541-.165-.026-.334-.04-.506-.04H4.29c-.177 0-.35.015-.519.042C4.052 1.656 4.88.999 5.878.999h4.238z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled16.category = 'Interface General';

export default CardStackFilled16;
