import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled16"
      {...props}
    >
      <path
        d="M12 7c1.898 0 3.32 1.742 2.939 3.602l-.41 2.002c-.286 1.396-1.514 2.399-2.939 2.399H4.414c-1.425 0-2.653-1.003-2.939-2.399l-.41-2.002C.685 8.742 2.105 7 4.005 7h7.994zm-.433-3c1.21 0 2.201.855 2.442 1.972-.6-.3-1.281-.472-2.009-.472H4.005c-.728 0-1.41.172-2.011.473C2.234 4.855 3.228 4 4.438 4h7.129zM9.987.999c1.061 0 1.951.658 2.318 1.57-.238-.045-.484-.069-.736-.069h-7.13c-.25 0-.495.024-.733.068C4.073 1.658 4.963 1 6.025 1h3.962z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled16.category = 'Interface General';

export default CardStackBoldFilled16;
