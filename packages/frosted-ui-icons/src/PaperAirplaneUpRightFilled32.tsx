import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightFilled32"
      {...props}
    >
      <path
        d="M26.926.501c2.818-.898 5.475 1.76 4.577 4.577l-7.455 23.386c-1.255 3.936-6.82 3.95-8.093.019l-2.75-8.492c-.011-.032-.026-.063-.038-.095L20 13.062c.293-.292.293-.767 0-1.06-.293-.293-.767-.293-1.06 0l-6.836 6.835c-.03-.01-.058-.024-.088-.033l-8.504-2.758c-3.929-1.274-3.914-6.838.021-8.093L26.926.501z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightFilled32.category = 'Communication';

export default PaperAirplaneUpRightFilled32;
