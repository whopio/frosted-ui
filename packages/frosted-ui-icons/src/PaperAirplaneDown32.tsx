import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDown32"
      {...props}
    >
      <path
        d="M12.765 29.032c1.357 2.627 5.115 2.627 6.472 0L30.503 7.224c1.896-3.67-2.03-7.615-5.71-5.736l-7.95 4.06c-.527.269-1.152.268-1.679 0L7.201 1.483C3.521-.393-.403 3.55 1.493 7.22l11.272 21.81zm5.14-.689c-.8 1.545-3.009 1.545-3.807 0L2.826 6.533C1.6 4.158 4.14 1.605 6.52 2.82l7.962 4.063c.247.126.505.219.768.28v8.09c0 .413.336.75.75.75s.75-.337.75-.75V7.164c.266-.06.527-.155.775-.282l7.95-4.06c2.38-1.215 4.921 1.337 3.695 3.713L17.904 28.343z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneDown32.category = 'Communication';

export default PaperAirplaneDown32;
