import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneFilled24"
      {...props}
    >
      <path
        d="M15.094 1.463C17.028.851 19 2.295 19 4.323v14.094c0 2.032-1.98 3.477-3.915 2.857l-6.693-2.146c-.194-.062-.392.083-.392.287v2.835c0 .415-.336.75-.75.75s-.75-.335-.75-.75V4.185l8.594-2.722zM5 18.041l-1.395-.446C2.053 17.098 1 15.654 1 14.024v-5.35C1 7.04 2.059 5.593 3.617 5.1L5 4.661v13.38zM20.683 7.534c.55.271 1.127.691 1.563 1.336.44.65.707 1.484.707 2.529s-.267 1.88-.707 2.53c-.436.645-1.012 1.065-1.563 1.336-.061.03-.122.057-.183.084v-7.9c.06.026.122.055.183.085z"
        fill={color}
      />
    </svg>
  );
};

MegaphoneFilled24.category = 'Objects';

export default MegaphoneFilled24;
