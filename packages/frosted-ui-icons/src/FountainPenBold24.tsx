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
        d="M12.736 2.167c.716-1.312 2.491-1.568 3.548-.511l6.062 6.062c1.057 1.057.8 2.832-.51 3.548L19.2 12.703l-2.54 6.351c-.457 1.145-1.488 1.963-2.707 2.148L2.15 22.99c-.314.047-.632-.057-.856-.281-.225-.225-.33-.544-.282-.858l1.788-11.803c.185-1.22 1.002-2.25 2.147-2.709l6.351-2.54 1.437-2.632zM5.69 9.197c-.486.194-.833.632-.912 1.15l-1.334 8.795 4.625-4.625C8.026 14.352 8 14.18 8 14c0-1.105.896-2 2-2 1.105 0 2 .895 2 2 0 1.104-.895 2-2 2-.178 0-.35-.026-.515-.07L4.86 20.556l8.794-1.332c.518-.078.957-.425 1.151-.912l2.428-6.074-5.47-5.47-6.072 2.429zM14.87 3.07c-.113-.113-.302-.085-.378.055l-1.251 2.29 5.344 5.345 2.293-1.25c.139-.076.166-.265.054-.378L14.87 3.07z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBold24.category = 'Interface General';

export default FountainPenBold24;
