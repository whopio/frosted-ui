import * as React from 'react';
import { IconProps } from './types';

export const PencilBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBoldFilled16"
      {...props}
    >
      <path
        d="M11.956 9.12l-5.51 5.348c-.156.15-.357.247-.572.274l-4 .5c-.306.038-.613-.067-.831-.285-.218-.218-.324-.525-.285-.831l.5-4 .033-.158c.045-.155.128-.297.241-.414L6.88 4.043l5.076 5.076zM11.573.75c.938 0 1.839.373 2.502 1.036l.139.139c.663.663 1.036 1.564 1.036 2.502 0 .956-.388 1.872-1.074 2.538l-.786.76-5.118-5.118.762-.783C9.7 1.138 10.617.75 11.574.75z"
        fill={color}
      />
    </svg>
  );
};

PencilBoldFilled16.category = 'Objects';

export default PencilBoldFilled16;
