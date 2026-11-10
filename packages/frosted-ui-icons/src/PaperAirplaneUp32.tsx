import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUp32"
      {...props}
    >
      <path
        d="M12.765 2.971c1.357-2.627 5.115-2.627 6.472 0L30.503 24.78c1.896 3.67-2.03 7.615-5.71 5.736l-7.95-4.06c-.527-.269-1.152-.269-1.679 0L7.201 30.52c-3.68 1.877-7.604-2.067-5.708-5.737l11.272-21.81zm5.14.689c-.8-1.546-3.009-1.546-3.807 0L2.826 25.47C1.6 27.845 4.14 30.398 6.52 29.183l7.962-4.064c.247-.125.505-.218.768-.279v-8.09c0-.414.336-.75.75-.75s.75.336.75.75v8.087c.266.061.527.155.775.282l7.95 4.06c2.38 1.216 4.921-1.337 3.695-3.712L17.904 3.66z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUp32.category = 'Communication';

export default PaperAirplaneUp32;
