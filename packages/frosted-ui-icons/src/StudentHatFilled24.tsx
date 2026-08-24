import * as React from 'react';
import { IconProps } from './types';

export const StudentHatFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StudentHatFilled24"
      {...props}
    >
      <path
        d="M20 16.888c0 .924-.27 1.951-1.073 2.672C17.779 20.587 15.547 22 12 22c-3.549 0-5.78-1.413-6.926-2.441C4.271 18.839 4 17.813 4 16.889v-3.86l6.712 3.563c.806.428 1.772.428 2.578 0L20 13.029v3.859zM11.557 1.582c.286-.11.604-.11.89 0l.14.063 10.752 5.708c.464.246.681.711.659 1.167.002.02.004.042.004.063v6.639c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.218l-9.914 5.264c-.367.194-.806.194-1.172 0L.664 9.56c-.885-.47-.885-1.739 0-2.208l10.75-5.707.142-.064z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StudentHatFilled24.category = 'Objects';

export default StudentHatFilled24;
