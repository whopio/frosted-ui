import * as React from 'react';
import { IconProps } from './types';

export const BookFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookFilled32"
      {...props}
    >
      <path
        d="M21.65 3.32c2.757-.71 5.87-.26 8.88 1.627.292.183.469.503.469.847v21.52c0 .355-.188.684-.494.863-.306.18-.684.183-.993.01-5.388-3.01-10.462-2.314-12.7.799-.02.028-.062.012-.062-.023V6.518c0-.179.068-.351.194-.478 1.306-1.312 2.914-2.258 4.706-2.72zM1.47 4.947C4.48 3.06 7.594 2.609 10.35 3.32c1.793.462 3.4 1.408 4.706 2.72.126.127.194.3.194.478v22.446c0 .034-.042.05-.062.022-2.237-3.113-7.312-3.81-12.7-.799-.31.173-.687.17-.993-.01-.306-.18-.494-.508-.494-.863V5.794c0-.344.177-.664.469-.847z"
        fill={color}
      />
    </svg>
  );
};

BookFilled32.category = 'Communication';

export default BookFilled32;
