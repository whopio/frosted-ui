import * as React from 'react';
import { IconProps } from './types';

export const StickerFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StickerFilled20"
      {...props}
    >
      <path
        d="M11.684.488C14.75-.22 17.812 1.693 18.52 4.76l.522 2.26c.063.273-.107.545-.38.608l-4.417 1.02-.221.057c-2.256.642-3.635 2.949-3.102 5.26l1.02 4.417c.063.273-.107.545-.38.608l-2.26.522c-3.067.708-6.128-1.205-6.836-4.272L.981 8.81C.273 5.741 2.186 2.68 5.253 1.972l6.43-1.485zm6.855 8.708c.335-.078.648.194.599.534-.476 3.313-2.329 6.278-5.098 8.158-.284.193-.665.03-.743-.304l-.913-3.957c-.364-1.578.62-3.153 2.198-3.518l3.957-.913z"
        fill={color}
      />
    </svg>
  );
};

StickerFilled20.category = 'Objects';

export default StickerFilled20;
