import * as React from 'react';
import { IconProps } from './types';

export const CompassBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM15.4678 7.67773C16.1709 5.82399 14.3557 4.00843 12.502 4.71094L12.4863 4.7168L8.41992 6.40918C7.49532 6.76467 6.76467 7.49533 6.40918 8.41992L4.7168 12.4863L4.71387 12.4941L4.71094 12.501C4.00779 14.3549 5.8238 16.171 7.67773 15.4678L7.69727 15.46L7.7168 15.4512L11.6055 13.5801C12.5094 13.2244 13.2244 12.5094 13.5801 11.6055L15.4512 7.7168L15.46 7.69727L15.4678 7.67773Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled20.category = 'Interface General';

export default CompassBoldFilled20;
