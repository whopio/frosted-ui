import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13ZM10 4.75C7.86892 4.75 6.50019 6.49055 6.5 8.34961C6.5 8.90189 6.94772 9.34961 7.5 9.34961C8.05228 9.34961 8.5 8.90189 8.5 8.34961C8.50018 7.431 9.13078 6.75 10 6.75C10.8603 6.75016 11.4998 7.46043 11.5 8.34961C11.5 8.88814 11.201 9.29555 10.5273 9.44531C9.80452 9.60612 9.00039 10.2385 9 11.25C9 11.802 9.44701 12.2496 9.99902 12.25C10.5036 12.2502 10.9198 11.8764 10.9883 11.3906C12.4547 11.0538 13.5 9.92236 13.5 8.34961C13.4998 6.53928 12.1397 4.75016 10 4.75Z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBoldFilled20.category = 'Interface General';

export default QuestionCircleBoldFilled20;
