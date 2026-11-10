import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBold24"
      {...props}
    >
      <path
        d="M12.736 2.167c.716-1.312 2.491-1.568 3.548-.51l6.063 6.062c1.056 1.056.8 2.832-.511 3.548L19.2 12.703l-2.539 6.352c-.458 1.145-1.489 1.962-2.708 2.147L2.151 22.99c-.313.048-.632-.057-.856-.281-.225-.225-.329-.543-.281-.857l1.788-11.804c.185-1.22 1.001-2.25 2.146-2.708L11.3 4.799l1.436-2.632zm-7.045 7.03c-.486.195-.833.633-.912 1.15l-1.334 8.796 4.625-4.625C8.026 14.352 8 14.179 8 14c0-1.104.895-2 2-2s2 .895 2 2c0 1.104-.896 2-2 2-.178 0-.35-.026-.515-.07L4.86 20.558l8.794-1.332c.518-.079.957-.426 1.152-.913l2.427-6.074-5.47-5.47-6.072 2.43zm9.18-6.127c-.114-.112-.302-.085-.379.055l-1.25 2.291 5.343 5.345 2.293-1.25c.14-.077.167-.266.055-.378L14.87 3.07z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBold24.category = 'Interface General';

export default FountainPenBold24;
