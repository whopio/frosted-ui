import * as React from 'react';
import { IconProps } from './types';

export const StudentHat16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StudentHat16"
      {...props}
    >
      <path
        d="M7.554 1.082c.287-.11.604-.11.891 0l.14.064 6.75 3.583c.45.239.67.686.662 1.128L16 5.91v4.39c0 .415-.336.75-.75.75s-.75-.335-.75-.75V7.38l-1.5.797v3.738c0 .287-.054.647-.273.977C12.244 13.622 10.917 15 8 15c-2.92 0-4.245-1.379-4.728-2.11-.217-.33-.271-.688-.271-.975v-3.74L.664 6.938c-.885-.47-.885-1.739 0-2.208l6.75-3.583.14-.064zm1.032 9.438c-.367.194-.806.194-1.173 0L4.5 8.973v2.942c0 .107.02.144.023.149C4.765 12.43 5.647 13.5 8 13.5c2.351 0 3.235-1.07 3.478-1.437.002-.004.023-.041.023-.149V8.972L8.586 10.52zM1.783 5.832L8 9.132l6.216-3.3-6.216-3.3-6.216 3.3z"
        fill={color}
      />
    </svg>
  );
};

StudentHat16.category = 'Objects';

export default StudentHat16;
