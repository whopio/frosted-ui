import * as React from 'react';
import { IconProps } from './types';

export const CardStackBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBold20"
      {...props}
    >
      <path
        d="M12.697.999c1.691 0 3.007 1.45 2.864 3.118 1.293.38 2.194 1.644 2.045 3.06l-.052.488c1.024.744 1.622 2.026 1.403 3.39l-.804 5.003c-.272 1.696-1.736 2.944-3.455 2.944H5.305c-1.719 0-3.184-1.248-3.456-2.944l-.804-5.003c-.22-1.366.38-2.648 1.406-3.392l-.05-.486c-.15-1.416.75-2.679 2.043-3.06C4.301 2.45 5.618 1 7.31 1h5.388zM4.501 9c-.923 0-1.628.827-1.481 1.738l.803 5.002c.117.727.745 1.262 1.482 1.262h9.393c.737 0 1.364-.535 1.48-1.262l.805-5.002C17.129 9.827 16.424 9 15.5 9h-11zm.759-3c-.52 0-.925.45-.87.967l.003.036L4.5 7h11c.038 0 .075.002.112.003l.004-.036c.055-.517-.35-.967-.87-.967H5.26zm2.049-3.001c-.527 0-.934.462-.868.984L6.442 4h7.122l.002-.017c.065-.522-.342-.984-.869-.984H7.31z"
        fill={color}
      />
    </svg>
  );
};

CardStackBold20.category = 'Interface General';

export default CardStackBold20;
