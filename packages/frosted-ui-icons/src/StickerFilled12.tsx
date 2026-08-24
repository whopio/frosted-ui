import * as React from 'react';
import { IconProps } from './types';

export const StickerFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StickerFilled12"
      {...props}
    >
      <path
        d="M7.202.146c1.776-.41 3.547.697 3.958 2.473l.316 1.37c.036.159-.062.316-.22.353l-3.06.706c-1.38.319-2.242 1.697-1.923 3.078l.707 3.06c.036.158-.062.315-.22.351l-1.371.317c-1.776.41-3.548-.697-3.958-2.473l-.99-4.288c-.41-1.775.698-3.547 2.473-3.957l4.288-.99zm3.964 5.756c.2-.046.385.123.344.324-.347 1.736-1.317 3.289-2.725 4.362-.164.125-.396.033-.443-.167l-.607-2.633c-.133-.573.225-1.146.799-1.278l2.632-.608z"
        fill={color}
      />
    </svg>
  );
};

StickerFilled12.category = 'Objects';

export default StickerFilled12;
